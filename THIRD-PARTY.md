# Third-party licenses

Remote17 is a fork of **T3 Code** (© 2026 T3 Tools Inc., [MIT](LICENSE)). The app bundles the
open-source components listed below. Their full license texts ship inside each package and are
shown in the app under **Settings → About → Open source licenses**. The original project's
license tooling lives in `third-party-licenses/` and `third-party-licenses.config.json`.

Data source: `pnpm licenses list --filter @t3tools/mobile --prod` on the fork's lockfile
(2026-11-04). Versions can change when the lockfile changes.

## Summary

All production dependencies of the mobile app (670 packages) by license:

| License | Packages |
|---|---|
| MIT | 592 |
| ISC | 23 |
| Apache-2.0 | 11 |
| BSD-2-Clause | 10 |
| BSD-3-Clause | 7 |
| BlueOak-1.0.0 | 6 |
| apache-2.0 | 4 |
| Unknown | 3 |
| Unlicense | 2 |
| 0BSD | 2 |
| MIT AND OFL-1.1 | 1 |
| MIT AND Apache-2.0 | 1 |
| Python-2.0 | 1 |
| CC-BY-4.0 | 1 |
| (MIT OR Apache-2.0) | 1 |
| (AFL-2.1 OR BSD-3-Clause) | 1 |
| MPL-2.0 | 1 |
| CC0-1.0 | 1 |
| (BSD-3-Clause OR GPL-2.0) | 1 |
| (MIT OR CC0-1.0) | 1 |

No dependency forbids redistribution, modification or commercial use. Obligations:

- **MIT, ISC, BSD-2/3-Clause, 0BSD, BlueOak-1.0.0, Apache-2.0, Unlicense, CC0-1.0, Python-2.0**:
  keep copyright and license notices (Apache-2.0 also: keep NOTICE files, state changes).
- **OFL-1.1** (DM Sans font in `@expo-google-fonts/dm-sans`): the font may be bundled and
  redistributed with software; it may not be sold on its own and modified versions must not use
  the reserved font name.
- **MPL-2.0** (`lightningcss`): build-time CSS tool; file-level copyleft only applies if its own
  files are modified and distributed (they are not).
- **CC-BY-4.0** (`caniuse-lite`): browser support data used at build time; attribution to
  caniuse.com is kept in the package.
- **(BSD-3-Clause OR GPL-2.0)** (`node-forge`): used under the BSD-3-Clause option.
- **"Unknown"** entries are this repository's own native modules (`apps/mobile/modules/*`),
  covered by the root MIT license.

## Direct dependencies of the mobile app

| Package | Version | License | Homepage |
|---|---|---|---|
| `@clerk/expo` | 4.14.0 | MIT | https://clerk.com/ |
| `@clerk/expo-native-components` | 0.4.0 | MIT | https://clerk.com/ |
| `@effect/atom-react` | 4.1.2 | MIT | https://effect.website |
| `@expo-google-fonts/dm-sans` | 0.4.2 | MIT AND OFL-1.1 | https://github.com/expo/google-fonts/tree/master/font-packages/dm-sans |
| `@expo/metro-runtime` | 58.0.14 | MIT | https://github.com/expo/expo/tree/main/packages/@expo/metro-runtime |
| `@expo/ui` | 58.0.20 | MIT | https://docs.expo.dev/versions/latest/sdk/ui/ |
| `@legendapp/list` | 3.3.5 | MIT | https://github.com/LegendApp/legend-list |
| `@material/material-color-utilities` | 0.3.0 | Apache-2.0 | https://github.com/material-foundation/material-color-utilities/tree/main/typescript |
| `@noble/curves` | 1.9.1 | MIT | https://paulmillr.com/noble/ |
| `@pierre/diffs` | 1.6.1 | apache-2.0 |  |
| `@pierre/highlights` | 0.2.0 | apache-2.0 |  |
| `@react-native-ai/apple` | 0.12.0 | MIT | https://github.com/callstackincubator/ai |
| `@react-native-async-storage/async-storage` | 3.1.1 | MIT | https://github.com/react-native-async-storage/async-storage |
| `@react-native-menu/menu` | 2.0.0 | MIT | https://github.com/react-native-menu/menu |
| `@react-navigation/elements` | 2.9.45 | MIT | https://reactnavigation.org |
| `@react-navigation/native` | 7.5.1 | MIT | https://reactnavigation.org |
| `@react-navigation/native-stack` | 7.21.0 | MIT | https://github.com/software-mansion/react-native-screens |
| `@t3tools/mobile-highlights-native` | file:apps/mobile/modules/t3-highlights | Unknown |  |
| `@t3tools/mobile-review-diff-native` | file:apps/mobile/modules/t3-review-diff | Unknown |  |
| `@t3tools/mobile-source-text` | file:apps/mobile/modules/t3-source-text | MIT |  |
| `@t3tools/mobile-terminal-native` | file:apps/mobile/modules/t3-terminal | Unknown |  |
| `@tabler/icons-react-native` | 3.44.0 | MIT | https://tabler.io/icons |
| `clsx` | 2.1.1 | MIT | https://github.com/lukeed/clsx |
| `diff` | 8.0.3, 9.0.0 | BSD-3-Clause | https://github.com/kpdecker/jsdiff |
| `effect` | 4.1.2 | MIT | https://effect.website |
| `expo` | 58.0.14 | MIT | https://github.com/expo/expo/tree/main/packages/expo |
| `expo-application` | 58.1.2 | MIT | https://docs.expo.dev/versions/latest/sdk/application/ |
| `expo-asset` | 58.0.16 | MIT | https://docs.expo.dev/versions/latest/sdk/asset/ |
| `expo-audio` | 58.0.9 | MIT | https://docs.expo.dev/versions/latest/sdk/audio/ |
| `expo-auth-session` | 58.0.13 | MIT | https://docs.expo.dev/versions/latest/sdk/auth-session |
| `expo-blur` | 58.0.4 | MIT | https://docs.expo.dev/versions/latest/sdk/blur-view/ |
| `expo-build-properties` | 58.0.11 | MIT | https://docs.expo.dev/versions/latest/sdk/build-properties |
| `expo-camera` | 58.0.10 | MIT | https://docs.expo.dev/versions/latest/sdk/camera/ |
| `expo-clipboard` | 58.0.3 | MIT | https://docs.expo.dev/versions/latest/sdk/clipboard |
| `expo-constants` | 58.0.12 | MIT | https://docs.expo.dev/versions/latest/sdk/constants/ |
| `expo-crypto` | 58.0.7 | MIT | https://docs.expo.dev/versions/latest/sdk/crypto/ |
| `expo-dev-client` | 58.0.14 | MIT | https://docs.expo.dev/versions/latest/sdk/dev-client/ |
| `expo-device` | 58.0.5 | MIT | https://docs.expo.dev/versions/latest/sdk/device/ |
| `expo-document-picker` | 58.0.4 | MIT | https://docs.expo.dev/versions/latest/sdk/document-picker/ |
| `expo-file-system` | 58.0.9 | MIT | https://docs.expo.dev/versions/latest/sdk/filesystem/ |
| `expo-font` | 58.0.8 | MIT | https://docs.expo.dev/versions/latest/sdk/font/ |
| `expo-glass-effect` | 58.0.4 | MIT | https://docs.expo.dev/versions/latest/sdk/glass-effect/ |
| `expo-haptics` | 58.0.7 | MIT | https://docs.expo.dev/versions/latest/sdk/haptics/ |
| `expo-image` | 58.0.15 | MIT | https://docs.expo.dev/versions/latest/sdk/image/ |
| `expo-image-manipulator` | 58.0.14 | MIT | https://docs.expo.dev/versions/latest/sdk/imagemanipulator/ |
| `expo-image-picker` | 58.0.10 | MIT | https://docs.expo.dev/versions/latest/sdk/imagepicker/ |
| `expo-keep-awake` | 58.0.3 | MIT | https://docs.expo.dev/versions/latest/sdk/keep-awake/ |
| `expo-linking` | 58.0.13 | MIT | https://docs.expo.dev/versions/latest/sdk/linking |
| `expo-network` | 58.0.3 | MIT | https://docs.expo.dev/versions/latest/sdk/network/ |
| `expo-notifications` | 58.1.5 | MIT | https://docs.expo.dev/versions/latest/sdk/notifications/ |
| `expo-observe` | 58.0.16 | MIT | https://docs.expo.dev/ |
| `expo-paste-input` | 0.1.15 | MIT | https://github.com/arunabhverma/expo-paste-input |
| `expo-quick-actions` | 6.0.2 | MIT | https://github.com/evanbacon/expo-quick-actions/ |
| `expo-secure-store` | 58.0.2 | MIT | https://docs.expo.dev/versions/latest/sdk/securestore/ |
| `expo-sensors` | 58.0.4 | MIT | https://docs.expo.dev/versions/latest/sdk/sensors/ |
| `expo-sharing` | 58.0.19 | MIT | https://docs.expo.dev/versions/latest/sdk/sharing/ |
| `expo-splash-screen` | 58.0.10 | MIT | https://docs.expo.dev/versions/latest/sdk/splash-screen/ |
| `expo-sqlite` | 58.0.13 | MIT | https://docs.expo.dev/versions/latest/sdk/sqlite/ |
| `expo-symbols` | 58.0.4 | MIT | https://docs.expo.dev/versions/latest/sdk/symbols/ |
| `expo-updates` | 58.0.17 | MIT | https://docs.expo.dev/versions/latest/sdk/updates/ |
| `expo-video` | 58.0.11 | MIT | https://docs.expo.dev/versions/latest/sdk/video/ |
| `expo-web-browser` | 58.0.6 | MIT | https://docs.expo.dev/versions/latest/sdk/webbrowser/ |
| `expo-widgets` | 58.0.20 | MIT | https://docs.expo.dev/versions/latest/sdk/widgets/ |
| `react` | 19.3.0 | MIT | https://react.dev/ |
| `react-dom` | 19.3.0 | MIT | https://react.dev/ |
| `react-native` | 0.88.0 | MIT | https://reactnative.dev/ |
| `react-native-blob-util` | 0.25.1 | MIT | https://github.com/RonRadtke/react-native-blob-util |
| `react-native-enriched-markdown` | 1.2.0-t3.16 | MIT | https://enriched.swmansion.com/markdown |
| `react-native-gesture-handler` | 3.3.0 | MIT | https://docs.swmansion.com/react-native-gesture-handler/ |
| `react-native-image-viewing` | 0.2.2 | MIT | https://github.com/jobtoday/react-native-image-viewing |
| `react-native-keyboard-controller` | 1.22.8 | MIT | https://kirillzyusko.github.io/react-native-keyboard-controller/ |
| `react-native-nitro-modules` | 0.37.1 | MIT | https://nitro.margelo.com |
| `react-native-pdf-jsi` | 5.0.0 | MIT | https://github.com/126punith/react-native-pdf-jsi |
| `react-native-reanimated` | 4.7.1 | MIT | https://docs.swmansion.com/react-native-reanimated |
| `react-native-safe-area-context` | 5.10.1 | MIT | https://github.com/AppAndFlow/react-native-safe-area-context |
| `react-native-screens` | 5.0.0-t3.48 | MIT | https://github.com/juliusmarminge/react-native-screens/tree/t3/main |
| `react-native-svg` | 15.16.0 | MIT | https://github.com/software-mansion/react-native-svg |
| `react-native-webview` | 14.0.1 | MIT | https://github.com/react-native-webview/react-native-webview |
| `react-native-worklets` | 0.13.0 | MIT | https://docs.swmansion.com/react-native-worklets |
| `remark-gfm` | 4.0.1 | MIT | https://github.com/remarkjs/remark-gfm |
| `remark-parse` | 11.0.0 | MIT | https://remark.js.org |
| `tailwind-merge` | 3.6.0 | MIT | https://github.com/dcastil/tailwind-merge |
| `unified` | 11.0.5 | MIT | https://unifiedjs.com |
| `uniwind` | 1.13.0 | MIT | https://uniwind.dev |

## Native code bundled outside npm

| Component | Where | License |
|---|---|---|
| React Native / Hermes | via `react-native` | MIT |
| Clerk iOS SDK (`clerk-ios`) | CocoaPods, via `@clerk/expo-native-components` | MIT |
| GoogleUtilities, AppCheckCore, RecaptchaInterop | CocoaPods (Clerk's Google sign-in) | Apache-2.0 |
| SIMDe | `apps/mobile/modules/t3-highlights/Vendor/simde` | MIT (© Evan Nemerson) |
| wasm2c runtime (WABT) | `apps/mobile/modules/t3-highlights/Vendor/wasm2c` | Apache-2.0 |
| Composer editor (derived from Expo) | `apps/mobile/modules/t3-composer-editor` | MIT (© 650 Industries) |
| Source text view (derived from Bluesky) | `apps/mobile/modules/t3-source-text` | MIT (© Bluesky PBC) |
| `react-native-screens` fork (`5.0.0-t3.48`) | `apps/mobile/deps` | MIT (© Software Mansion) |
| `react-native-enriched-markdown` fork | `apps/mobile/deps` | MIT (© Software Mansion) |

## Assets

| Asset | License / status |
|---|---|
| Remote17 app icon (`apps/mobile/assets/fork/`) | Original artwork for this fork, MIT |
| DM Sans font | SIL OFL-1.1 |
| Tabler icons, Lucide-derived context chip icons | MIT / ISC |
| Pierre file icons (`@pierre/*`) | Apache-2.0 |
| Material Symbols | Apache-2.0 |
| MesloLGS NF terminal font (Android only, not in the iOS build) | Apache-2.0 (Meslo LG) + Nerd Fonts glyphs (MIT / OFL-1.1) |
| Provider and source-control logos (OpenAI, Anthropic, GitHub, GitLab, ...) | Trademarks of their owners, shown only to identify the corresponding service, as in the original app |
