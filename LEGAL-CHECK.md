# LEGAL-CHECK — Remote17 (unofficial iOS 17 fork of T3 Code)

> **Important: this document is NOT legal advice.** It is a careful technical and documentary
> review written by someone who is not a lawyer. For a binding opinion, consult a qualified
> professional. The texts quoted here can change; consultation dates are given.

- **Review date:** November 4, 2026; re-checked November 6, 2026 before the first Release
- **Repository reviewed:** `pingdotgg/t3code` @ `9e85538535` + changes on branch `ios17-legacy`
- **Fork:** <https://github.com/Xillo23/remote17-ios17-unofficial>

## Summary

| Area | Result |
|---|---|
| Project license (MIT) | ✅ Allows use, modification, redistribution and commercial use; obligation: keep the copyright and license notice (done) |
| Dependency licenses | ✅ No restriction on redistribution, modification or commercial use; no strong copyleft that binds the app |
| Trademarks, logos, names | ✅ After the changes: app renamed "Remote17", original icon, T3 logo removed from the UI; "T3 Code" used only descriptively |
| Secrets in the repo and its history | ✅ No real secrets found; only fake test data and public identifiers (see §4). None of them is included in the fork build |
| T3 Code / T3 Connect Terms and Privacy Policy | ✅ No ban on unofficial clients or on redistributing builds of the open-source code; trademark restriction respected; the fork does not use T3 cloud services |
| GitHub Terms / AUP | ✅ No ban on publishing compiled binaries of freely licensed software; ⚠️ low residual risk related to jailbreak installation (§6) |
| App privacy | ✅ No analytics, crash reporting or maintainer server; the only recipient is the user's own T3 Code server (§7) |
| Circumventing T3 protections/authentication | ✅ None. T3 sign-in and T3 Connect are neither imitated nor bypassed: they are simply unavailable in the fork (§8) |
| **IPA / Release publication** | ✅ **Allowed for the fork-mode build** and published (§9). Built on Codemagic from the public `codemagic.yaml`; tested on an iPad 6 with iOS 17 |

## 1. Project license

- `LICENSE` file: **MIT License, Copyright (c) 2026 T3 Tools Inc.** — left unchanged.
- The MIT license permits using, copying, modifying, merging, publishing, distributing,
  sublicensing and selling the software, provided the copyright notice and license text are
  included "in all copies or substantial portions". No restriction on commercial use.
- The fork's changes are released under the same MIT license.
- Source: [`LICENSE`](LICENSE); MIT text: <https://opensource.org/license/mit>.

## 2. Dependency licenses (npm, Expo, native libraries)

Method: installed the mobile app's dependencies without running scripts
(`pnpm install --filter @t3tools/mobile... --ignore-scripts`) and ran
`pnpm licenses list --filter @t3tools/mobile --prod` → **670 packages** analyzed; read the
`podspec` files (iOS requirements) and the `LICENSE` files of native code included in the repo.

| License | Packages | Obligations / notes |
|---|---|---|
| MIT | 592 | Keep copyright and license notice |
| ISC, BSD-2/3-Clause, 0BSD, BlueOak-1.0.0, Unlicense, CC0-1.0, Python-2.0 | 52 | Permissive; keep notices where required |
| Apache-2.0 (e.g. `@pierre/*`, `@material/material-color-utilities`, wasm2c, Google pods) | 15 | Keep license and NOTICE, state changes |
| MIT AND OFL-1.1 (`@expo-google-fonts/dm-sans`) | 1 | Font may be redistributed with software; may not be sold on its own |
| MPL-2.0 (`lightningcss`) | 1 | Build tool; file-level copyleft only, not modified |
| CC-BY-4.0 (`caniuse-lite`) | 1 | Data used at build time; attribution already in the package |
| (BSD-3-Clause OR GPL-2.0) (`node-forge`) | 1 | Used under the BSD-3-Clause option → no GPL obligations |
| "Unknown" | 3 | This repository's own native modules (`apps/mobile/modules/*`) → covered by the repo's MIT license |

Native code outside npm, verified: SIMDe (MIT), wasm2c (Apache-2.0), composer module derived from
Expo (MIT), text module derived from Bluesky (MIT), forks of `react-native-screens` and
`react-native-enriched-markdown` (MIT), Clerk iOS SDK (MIT), Google pods (Apache-2.0).
`react-native-pdf-jsi` is MIT (LICENSE file checked: no license key or "pro" clause).

**Result:** no restriction on redistribution, modification or commercial use; no copyleft
obligation that extends to the app. Detailed list: [THIRD-PARTY.md](THIRD-PARTY.md).

## 3. Trademarks, logos, names, fonts, icons, images, audio, text

Found in the original repository:

- **T3 Code logos and icons** (`assets/dev`, `assets/nightly`, `assets/prod`, "T3" wordmark in
  `apps/mobile/src/components/T3Wordmark.tsx`, widget icons). The T3 Code Terms state:
  *"You may not use our trademarks, service marks, or trade dress without written permission."*
- **The "T3" name:** a web search shows that another mobile fork (mikrocode) was renamed
  specifically to avoid infringing the "T3" trademark. As a precaution this fork **does not use
  "T3" in its own name** (nor the initially suggested "T3 Mobile iOS17"): the chosen name is
  **Remote17**; no app with this name came up in the search.
- **Third-party logos** (OpenAI, Anthropic, Antigravity, GitHub, GitLab, etc.): used only to
  identify the corresponding service (nominative use), as in the original app.
- **Fonts:** DM Sans (OFL-1.1), MesloLGS NF (Android only; Apache-2.0 + Nerd Fonts glyphs).
- **Icons:** Tabler (MIT), Lucide (ISC), Pierre (Apache-2.0), Material Symbols (Apache-2.0),
  SF Symbols (provided by iOS, not bundled).
- **Audio:** no audio files in the mobile app (the CC0 sounds are only in web/desktop).
- **Specially licensed text:** none in the mobile app.

Actions taken:

- App name, bundle ID, URL scheme and slug changed (Remote17 / `io.github.xillo23.remote17`).
- Icon and splash replaced with an **original icon** made for the fork.
- T3 wordmark/logo removed from the UI (titles, loading screen, activity log).
- "T3 Code" remains only where it describes the original software (e.g. "Install T3 Code 1.2 on
  this machine", "Sent by T3 Code") and in the "unofficial fork" notices.
- The T3 logo files remain in the fork's **source code** (as in any GitHub fork, to avoid altering
  the rest of the monorepo), but they are **not used as an identity** and are not included in the
  fork's iOS build.

## 4. API keys, tokens, certificates and secrets

Method: **gitleaks 8.30.1** over the full history (`--log-opts=--all`, 34,808 commits, 1.22 GB)
and the working tree; manual review of the findings outside tests, with values masked.

- History: 279 findings. Working tree: 121 (including installed npm packages).
- Almost all are **fake test data** and fixtures (e.g. test PEM keys, `sk_test_FAKE…`, example
  GitLab tokens), including in the vendored reference repositories under `.repos/`.
- False positives: key names (`keybindings.ts`), memoization keys in patches, internal
  `sessionKey` values in a planning file, the pairing-code alphabet.
- **Public identifiers** (not secrets by definition, and documented as such in `.env.example`:
  *"These are the same public identifiers baked into official release builds, not secrets"*):
  Clerk *publishable* key `pk_live_…`, CLI OAuth client ID, EAS project ID, Apple Team ID, Expo
  updates URL.
- **No real secrets found.** The fork added no tokens or secrets; the user's GitHub token was
  never written to any repository file.
- The T3 cloud identifiers are **not included** in the fork build, and the workflow fails if they
  appear in the configuration.
- The full gitleaks reports were kept locally and **were not published**.

## 5. T3 Code / T3 Connect Terms of Service and Privacy Policy

Sources read in the repository (`apps/marketing/src/pages/terms-of-service.astro`,
`privacy-policy.astro`) and online:

- Terms of Service (effective July 15, 2026): <https://t3.codes/terms-of-service>
- Privacy Policy (effective October 6, 2026): <https://t3.codes/privacy-policy>
- Documentation: [`docs/user/telemetry.md`](docs/user/telemetry.md),
  [`docs/internals/t3-connect.md`](docs/internals/t3-connect.md),
  [`docs/operations/connect-setup.md`](docs/operations/connect-setup.md), [`.env.example`](.env.example)

Relevant points:

1. **Open-source software:** *"Your use, copying, modification, and distribution of that source
   code are governed by the license included with the applicable repository … These Terms … do
   not limit rights granted to you by an applicable open-source license."* and *"Where those
   licenses conflict with these Terms for that software, the applicable open-source license
   controls."* → redistributing a build of the MIT code is governed by the MIT license.
2. **Unofficial clients / modified builds / reverse engineering:** **no clause** prohibits them
   (checked in both the source and the published page).
3. **Trademarks:** use without permission is prohibited → respected (see §3).
4. **Acceptable use:** *"Bypass rate limits, access controls, security measures, or usage
   restrictions"* is prohibited → the fork does not do this (see §8).
5. The Terms govern use of the **Services** (official apps, app.t3.codes, T3 Connect). The fork
   build **does not use T3-hosted services** (no relay, no Clerk, no OTA updates): it talks only
   to the user's own T3 Code server.
6. The project itself documents source builds (`.env.example`, mobile README) and states in
   `AGENTS.md` that *"A large number of our users run forks."*

**Conclusion:** there are no obstacles for the **code, workflow and documentation**. For the
**IPA**, no prohibition was found, provided it is the fork-mode build (no T3 identity and no T3
services). Publishing the IPA is still on hold for the technical reason in §9.

## 6. GitHub Terms of Service and Acceptable Use Policies

Sources (consulted November 4, 2026):

- GitHub Terms of Service: <https://docs.github.com/en/site-policy/github-terms/github-terms-of-service>
- GitHub Acceptable Use Policies: <https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies>
- DMCA guide: <https://docs.github.com/en/site-policy/content-removal-policies/guide-to-submitting-a-dmca-takedown-notice>

Findings:

- No rule prohibits publishing **compiled binaries** (Releases) of freely licensed software; you
  must have the right to publish them (MIT grants it) and comply with their license.
- Prohibited: content that infringes intellectual property rights (trademarks included → handled
  by the rebranding), software that bypasses **license key** checks (not present), malware (not
  present), unauthorized access to services (not present).
- The DMCA guide mentions the prohibition on circumventing technological measures that protect
  copyrighted works (17 U.S.C. §1201). The fork's IPA **is not a circumvention tool**: it is an
  ordinary app compiled from MIT source. Installing it does require a jailbreak and AppSync
  Unified, which are third-party tools chosen by the user; the fork names them as a requirement
  but does not host them. → **Low residual risk**, listed below.

## 7. App privacy

Analysis of the mobile app code (`apps/mobile/src`, `packages/client-runtime`, `packages/shared`)
and of the Expo configuration resolved for the fork build.

| External service | Original project | Fork build |
|---|---|---|
| User's T3 Code server (LAN / Tailscale / chosen URL) | Yes | **Yes** (the only required recipient) |
| T3 Connect relay `relay.t3.codes` (Cloudflare) | Yes, if configured | **No** (no URL configured) |
| Clerk authentication `clerk.t3.codes` (+ Google/Apple sign-in) | Yes, if configured | **No** (no key) |
| Crash reports / startup timings to Axiom via the relay | Yes (can be turned off) | **No** (no relay or token) |
| Expo Observe | Relay endpoint | **No** (`observe.invalid`) |
| Expo OTA updates `u.expo.dev` | Yes | **No** (disabled) |
| Expo push / APNs | Yes | **No** (entitlement removed, no project ID) |
| Google favicon service for sites visited by agents | Yes | **No** (removed in the fork) |
| Images/links inside messages or pull requests (e.g. GitHub) | Loaded from the original host | Unchanged, only when the user opens that content |
| Fork maintainer's server | — | **None** |

The client identifies itself to the server as "Remote17 (unofficial iOS client)". Telemetry of
the T3 Code **server** (PostHog/Axiom via `ingest.t3.codes`) depends on the user's server and can
be disabled with `T3CODE_TELEMETRY_ENABLED=false` (see `docs/user/telemetry.md`). All of this is
stated in the README, *Privacy* section.

## 8. Technical protections, authentication and T3 service limits

- The fork **does not change** authentication, pairing, permissions, the protocol or the server,
  and it **does not contact** or modify T3 services.
- **T3 account** sign-in and **T3 Connect** use Clerk and the T3 relay. The Clerk service accepts
  native apps only when their identifier has been authorized by the T3 administrators
  (`docs/operations/connect-setup.md`: *"A private development build using the production Clerk
  key still needs its development callback allowed by that instance's administrator"*; for iOS:
  registered Apple Team ID + bundle ID). Making sign-in work in the fork would require
  **imitating the official app's identity** (Team ID/bundle ID) or getting the T3 service
  settings changed: both are ruled out.
- Decision: in the fork build these features are **not configured**, and the README says so
  clearly. The connection to the computer uses **direct pairing** (LAN/Tailscale), a standard
  feature that needs no account.
- **Not verified on a device:** actual behavior on a real iOS 17 iPad has not been tested
  (see §9).

## 9. Publication: what was done and what was not

- ✅ Published on the fork: code, workflows (GitHub Actions and `codemagic.yaml`), documentation
  (README, CHANGES, THIRD-PARTY, this file).
- ✅ **GitHub Release with the fork-mode IPA** (unsigned and ad-hoc signed, with SHA-256 sums),
  after this re-check on November 6, 2026:
  - T3 Terms of Service (effective/last updated July 15, 2026) and Privacy Policy (October 6, 2026)
    re-read online: unchanged; still no clause against unofficial clients or redistributing
    builds of the MIT code; trademark and anti-circumvention clauses still respected.
  - The IPA was scanned: it contains no T3 cloud identifiers (Clerk publishable key, relay URL,
    EAS project, Apple team ID), no private keys or tokens, and no personal data of the
    maintainer. Matches for `pk_live_` and `BEGIN PRIVATE KEY` are only library error messages
    and format checks.
  - The fork's commits were scanned with gitleaks: no leaks. Commits use a GitHub `noreply`
    address.
  - The build ran on Codemagic from this repository's public `codemagic.yaml`, without secrets
    or code signing.
- The Release notes repeat the unofficial notice, the changes and the removal clause.
- No App Store publication.

## 10. Residual risks

1. **Trademarks:** even without "T3" in the name, the fork describes compatibility with T3 Code.
   This is descriptive use, but the owner could still object → **removal on request** clause in
   the README.
2. **Terms can change:** T3 Tools may change its Terms or policies; they must be checked again
   before every Release.
3. **Jailbreak / AppSync Unified:** installing apps not signed by Apple breaches the iOS end-user
   terms and carries security risks; the fork says so ("at your own risk"). Low risk of reports
   to GitHub (§6).
4. **iOS 17 compatibility** was tested only on one device (an iPad 6 on iOS 17). Other
   devices may behave differently. No legal impact, but it is disclosed (done).
5. **T3 Code server:** the user's server may send its own telemetry (configured by the user, not
   by the fork).
6. **Public fork of the whole monorepo:** it also contains web, desktop, relay and the original
   logo files, redistributed under MIT as in any GitHub fork.

---

*Document written on November 4, 2026, updated November 6, 2026. It does not constitute legal advice.*
