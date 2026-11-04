// Fork (Remote17): performance mode for old hardware such as the iPad 6 (A10, 2 GB RAM).
// It drops blur, heavy shadows and motion, and shortens list render-ahead distances.
// "auto" enables it with <= 3 GB RAM or iOS < 18; Settings > Appearance can force it.
import * as Device from "expo-device";
import * as SecureStore from "expo-secure-store";
import { useSyncExternalStore } from "react";
import { Platform } from "react-native";

export type PerformanceModePreference = "auto" | "on" | "off";

const STORAGE_KEY = "remote17.performance-mode.v1";
const LOW_MEMORY_BYTES = 3.2 * 1024 * 1024 * 1024;

type Listener = () => void;
const listeners = new Set<Listener>();
let preference: PerformanceModePreference = "auto";
let loadStarted = false;

function iosMajorVersion(): number | null {
  if (Platform.OS !== "ios") return null;
  const major = Number.parseInt(String(Platform.Version).split(".")[0] ?? "", 10);
  return Number.isFinite(major) ? major : null;
}

function detectLowEndDevice(): boolean {
  const major = iosMajorVersion();
  if (major !== null && major < 18) return true;
  const memory = Device.totalMemory;
  return typeof memory === "number" && memory > 0 && memory <= LOW_MEMORY_BYTES;
}

/** Computed once: the hardware and OS do not change while the app runs. */
export const PERFORMANCE_MODE_AUTO_DEFAULT = detectLowEndDevice();

function emit() {
  for (const listener of listeners) listener();
}

function ensureLoaded() {
  if (loadStarted) return;
  loadStarted = true;
  // Best effort: keychain access can fail on sideloaded builds; "auto" stays in effect then.
  void SecureStore.getItemAsync(STORAGE_KEY).then(
    (raw) => {
      if (raw === "on" || raw === "off") {
        preference = raw;
        emit();
      }
    },
    () => undefined,
  );
}

export function getPerformanceModePreference(): PerformanceModePreference {
  ensureLoaded();
  return preference;
}

export function isPerformanceModeEnabled(): boolean {
  const current = getPerformanceModePreference();
  return current === "auto" ? PERFORMANCE_MODE_AUTO_DEFAULT : current === "on";
}

export function setPerformanceModePreference(next: PerformanceModePreference) {
  if (next === preference) return;
  preference = next;
  emit();
  const write =
    next === "auto"
      ? SecureStore.deleteItemAsync(STORAGE_KEY)
      : SecureStore.setItemAsync(STORAGE_KEY, next);
  void write.catch(() => undefined);
}

export function subscribePerformanceMode(listener: Listener): () => void {
  ensureLoaded();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function usePerformanceMode(): boolean {
  return useSyncExternalStore(subscribePerformanceMode, isPerformanceModeEnabled);
}

export function usePerformanceModePreference(): PerformanceModePreference {
  return useSyncExternalStore(subscribePerformanceMode, getPerformanceModePreference);
}

/** Shorter render-ahead distance for virtualized lists while performance mode is on. */
export function performanceDrawDistance(normal: number, enabled: boolean): number {
  return enabled ? Math.max(200, Math.round(normal * 0.4)) : normal;
}
