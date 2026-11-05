# Changes compared to the original T3 Code

Base: [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) `main` at commit `9e85538535`
("feat(server): agents ask for secrets through request_secret instead of chat (#30257)").
Fork branch: `ios17-legacy`. Only the mobile app (`apps/mobile`), documentation and one
workflow were changed; server, web, desktop and shared packages are untouched.

Every change is visible with `git diff 9e85538535..ios17-legacy`.

## Build configuration — `apps/mobile/app.config.ts`

A "fork build" mode, on by default (`REMOTE17_FORK_BUILD=0` turns it off and restores the
original configuration):

- App name **Remote17**, slug `remote17`, URL scheme `remote17`, bundle identifier
  `io.github.xillo23.remote17` (overridable with `REMOTE17_BUNDLE_ID`).
- iOS **deployment target 17.0** (was 18.0).
- Generic original icon and splash image (`apps/mobile/assets/fork/`) instead of the T3 Code logos.
- No Apple team ID, no associated domains (`clerk.t3.codes`, `app.t3.codes`), keychain group based
  on the fork's own bundle identifier.
- Reduced-capability native setup (the existing "Personal Team" path): no widget extension, no
  share extension, no App Group, no push entitlement, no Sign in with Apple. The plugin that
  strips these entitlements also runs last in fork mode, so `aps-environment` is really removed.
- Expo over-the-air updates disabled and the official EAS project ID / owner removed, so the app
  never downloads code from the official update channel.
- `runtimeVersion` policy `appVersion` (no native fingerprinting needed).
- Permission prompts name Remote17 ("Allow Remote17 to …").

## Native code

- `apps/mobile/modules/t3-native-controls/ios/T3NativeControls.podspec`: minimum iOS 18.0 → 17.0.
  Its Swift code only uses iOS 17 APIs or APIs already guarded with `#available` (iOS 26/27.1).

## Performance on old hardware

- New `apps/mobile/src/lib/performanceMode.ts`: "performance mode", automatic on iOS < 18 or
  ≤ 3 GB RAM, can be forced on/off; preference kept in the keychain (falls back to automatic).
- New `Settings → Appearance → Performance` section
  (`features/settings/appearance/sections/PerformanceAppearanceSection.tsx`).
- `lib/appState.ts`: `useReduceMotionEnabled` / `readReduceMotionEnabled` also return true while
  performance mode is on, so every animation that honours Reduce Motion is simplified.
- `components/ui/GlassBackdrop.tsx`: no live `BlurView` in performance mode (opaque fill).
- `components/ui/GlassSurface.tsx`: no large shadows in performance mode.
- `features/home/HomeScreen.tsx`, `features/threads/ThreadFeed.tsx`,
  `features/pull-requests/PullRequestsScreen.tsx`: shorter list `drawDistance` (40 %, minimum
  200 pt) in performance mode.
- `lib/useUiRuntimeMemoryWarningGc.ts`: on an iOS memory warning, also clear the `expo-image`
  in-memory cache.

## iPad layout before iPadOS 26

Found on an iPad 6 (iOS 17.7): before iPadOS 26 the app lays out its columns in JavaScript.

- `features/threads/ThreadNavigationSidebar.tsx`: the sidebar thread list now lets UIKit inset it
  below the translucent navigation bar with the search field (`contentInsetAdjustmentBehavior`
  "automatic" instead of "never" before iOS 26), so the first threads are no longer hidden.
- `features/workspace/WorkspaceNativeTabs.ios.tsx`: the Chats / PRs / Usage / Settings bar gets
  its own row under the content instead of floating over the composer.
- `features/threads/sidebar-native-header-items.ts`: no second Settings button in the sidebar
  header there, since that tab row already has one.

## Privacy

- `features/threads/thread-work-log.tsx`: website icons in agent activity are no longer fetched
  from third parties (Google favicon service or the visited site); a generic icon is shown.
- `lib/authClientMetadata.ts`: the client identifies itself to the server as
  "Remote17 (unofficial iOS client)" instead of "T3 Code Mobile".
- `features/diagnostics/SettingsDiagnosticsRouteScreen.tsx`: text now states that no crash-report
  server is configured in this build.

## Branding (the original name and logo are not used as this app's identity)

- `components/T3Wordmark.tsx`: draws a generic prompt glyph instead of the T3 logo.
- `components/CompactBrandTitle.tsx`, `components/BrandMark.tsx`, `components/brandAssets.ts`,
  `features/workspace/WorkspaceRootScreen.tsx`, Android toolbars: show "Remote17" and the generic
  icon.
- New `lib/forkBranding.ts` (app name, fork and upstream URLs).
- `features/settings/SettingsAboutRouteScreen.tsx`: "unofficial fork" notice with links.
- `lib/mobileTheme.ts`: default theme label "Default" instead of "T3 Code".
- `crash-log-model.ts`, notification and microphone settings texts: app name updated.
- Texts that describe the T3 Code *server* ("Install T3 Code 1.2 on this machine",
  "Sent by T3 Code") are unchanged: they refer to the original software descriptively.

## CI

- New `.github/workflows/remote17-ios17-ipa.yml` (`workflow_dispatch`, `macos-latest`):
  Expo prebuild, deployment-target check, `xcodebuild` with `CODE_SIGNING_ALLOWED=NO`, per-binary
  `minos` check, unsigned and ad-hoc signed `.ipa` artifacts with SHA-256 sums. Fails if T3 cloud
  identifiers are present in the config. Uses no secrets.
- New `codemagic.yaml`: the same unsigned build on Codemagic (free macOS minutes), for when
  GitHub Actions is not available. Uses no secrets.
- The original project's workflows are disabled in this fork's GitHub settings (files unchanged).

## Documentation

- `README.md` rewritten for the fork; the original is kept as `README.upstream.md`.
- Added `CHANGES.md`, `THIRD-PARTY.md`, `LEGAL-CHECK.md`.
- `LICENSE` and all copyright notices are unchanged.

## Repository cleanup

Removed files that only serve the original project's own development, AI-agent and CI setup, and
are not needed to build this fork:

- AI agent and editor configuration: `.agents/`, `.claude/`, `.cursor/`, `AGENTS.md`, `CLAUDE.md`,
  `.vscode/`, `.devcontainer/`, `.macroscope/`, `.coderabbit.config.ts`, `t3.json`.
- Vendored read-only reference repositories: `.repos/` (about 225 MB, never used by the build).
- Upstream maintainer tooling: `.task-cache.json`, `.vercelignore`, `CONTRIBUTING.md`.
- Upstream GitHub setup: all workflows except `remote17-ios17-ipa.yml`, `.github/actions`,
  `.github/scripts`, issue and pull request templates (they disabled blank issues and pointed to the
  original repository), `SECURITY.md`, triage files.

Kept because the build or the workspace needs them: `infra/`, `evals/`, `.vite-hooks/`,
`.pnpmfile.cjs`, `knip.jsonc`, `.gitattributes`, `.gitignore`. The original project's code,
license and copyright notices are untouched. Syncing with upstream may report delete/modify
conflicts for these paths; resolve them by keeping the deletion.

## Not changed

- No changes to authentication, pairing, permissions, the WebSocket protocol, the server, or
  any T3 service. The app talks to T3 Code servers exactly like the original client does.
- Upstream unit tests that assert the official bundle identifiers (`app.config.test.ts`) expect
  `REMOTE17_FORK_BUILD=0`.
