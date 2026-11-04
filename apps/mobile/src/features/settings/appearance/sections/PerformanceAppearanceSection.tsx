import { SettingsSection } from "../../components/SettingsSection";
import { SettingsSwitchRow } from "../../components/SettingsSwitchRow";
import {
  PERFORMANCE_MODE_AUTO_DEFAULT,
  setPerformanceModePreference,
  usePerformanceMode,
  usePerformanceModePreference,
} from "../../../../lib/performanceMode";

/** Fork (Remote17): lighter rendering for old devices such as the iPad 6. */
export function PerformanceAppearanceSection() {
  const enabled = usePerformanceMode();
  const preference = usePerformanceModePreference();
  const automatic = preference === "auto";

  return (
    <SettingsSection title="Performance">
      <SettingsSwitchRow
        icon="bolt.horizontal.circle"
        label="Automatic"
        subtitle={
          PERFORMANCE_MODE_AUTO_DEFAULT
            ? "This device looks older, so performance mode is on by default."
            : "This device is fast enough; performance mode is off by default."
        }
        onValueChange={(next) =>
          setPerformanceModePreference(next ? "auto" : enabled ? "on" : "off")
        }
        value={automatic}
      />
      <SettingsSwitchRow
        disabled={automatic}
        icon="bolt.circle"
        label="Performance mode"
        subtitle="Turns off blur, shadows and animations and renders fewer list rows ahead."
        onValueChange={(next) => setPerformanceModePreference(next ? "on" : "off")}
        value={enabled}
      />
    </SettingsSection>
  );
}
