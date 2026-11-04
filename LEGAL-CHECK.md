# LEGAL-CHECK — Remote17 (fork non ufficiale di T3 Code per iOS 17)

> **Nota importante: questo documento NON è consulenza legale.** È una verifica tecnica e
> documentale fatta con cura, ma da chi non è un avvocato. Per un parere vincolante rivolgersi a
> un professionista. I testi citati possono cambiare: le date di consultazione sono indicate.

- **Data della verifica:** 4 novembre 2026
- **Repository verificato:** `pingdotgg/t3code` @ `9e85538535` + modifiche del branch `ios17-legacy`
- **Fork:** <https://github.com/Xillo23/remote17-ios17-unofficial>

## Esito in breve

| Area | Esito |
|---|---|
| Licenza del progetto (MIT) | ✅ Consente uso, modifica, ridistribuzione e uso commerciale; obbligo: mantenere copyright e licenza (fatto) |
| Licenze delle dipendenze | ✅ Nessun divieto di ridistribuzione/modifica/uso commerciale; nessun copyleft forte che vincoli l'app |
| Marchi, loghi, nomi | ✅ dopo le modifiche: app rinominata "Remote17", icona originale, logo T3 rimosso dall'interfaccia; "T3 Code" citato solo in modo descrittivo |
| Segreti nel repo e nella cronologia | ✅ Nessun segreto reale trovato; solo dati finti nei test e identificatori pubblici (vedi §4). Nessuno è incluso nella build del fork |
| Termini e Privacy di T3 Code / T3 Connect | ✅ Nessun divieto di client non ufficiali o di ridistribuire build del codice open source; divieto d'uso dei marchi rispettato; il fork non usa i servizi cloud T3 |
| Termini / AUP di GitHub | ✅ Nessun divieto di pubblicare binari compilati di software con licenza libera; ⚠️ rischio residuo basso legato all'installazione via jailbreak (§6) |
| Privacy dell'app | ✅ Nessun analytics, crash report o server del maintainer; unico destinatario: il server T3 Code dell'utente (§7) |
| Aggiramento di protezioni/autenticazione T3 | ✅ Nessuno. Login T3 e T3 Connect non sono imitati né aggirati: nel fork semplicemente non sono disponibili (§8) |
| **Pubblicazione IPA / Release** | ⛔ **Non effettuata.** Nessun ostacolo legale individuato per la build in modalità fork, ma **la build non esiste**: GitHub Actions è disabilitato sull'account (blocco tecnico, §9) |

## 1. Licenza del progetto

- File `LICENSE`: **MIT License, Copyright (c) 2026 T3 Tools Inc.** — lasciato intatto.
- La MIT permette di usare, copiare, modificare, unire, pubblicare, distribuire, concedere in
  sublicenza e vendere il software, a condizione che la nota di copyright e il testo della licenza
  siano inclusi "in tutte le copie o parti sostanziali". Nessun divieto di uso commerciale.
- Le modifiche del fork sono rilasciate con la stessa licenza MIT.
- Fonte: [`LICENSE`](LICENSE); testo MIT: <https://opensource.org/license/mit>.

## 2. Licenze delle dipendenze (npm, Expo, librerie native)

Metodo: installazione delle dipendenze dell'app mobile senza eseguire script
(`pnpm install --filter @t3tools/mobile... --ignore-scripts`) e
`pnpm licenses list --filter @t3tools/mobile --prod` → **670 pacchetti** analizzati; lettura dei
`podspec` (requisiti iOS) e dei file `LICENSE` del codice nativo incluso nel repo.

| Licenza | Pacchetti | Obblighi / note |
|---|---|---|
| MIT | 592 | Mantenere copyright e licenza |
| ISC, BSD-2/3-Clause, 0BSD, BlueOak-1.0.0, Unlicense, CC0-1.0, Python-2.0 | 52 | Permissive; mantenere le note dove richiesto |
| Apache-2.0 (es. `@pierre/*`, `@material/material-color-utilities`, wasm2c, pod Google) | 15 | Mantenere licenza e NOTICE, indicare le modifiche |
| MIT AND OFL-1.1 (`@expo-google-fonts/dm-sans`) | 1 | Font ridistribuibile con il software; non vendibile da solo |
| MPL-2.0 (`lightningcss`) | 1 | Strumento di build; copyleft solo a livello di file, non modificato |
| CC-BY-4.0 (`caniuse-lite`) | 1 | Dati usati in fase di build; attribuzione già nel pacchetto |
| (BSD-3-Clause OR GPL-2.0) (`node-forge`) | 1 | Si usa l'opzione BSD-3-Clause → nessun obbligo GPL |
| "Unknown" | 3 | Sono moduli nativi di questo stesso repo (`apps/mobile/modules/*`) → coperti dalla MIT del repo |

Codice nativo extra-npm verificato: SIMDe (MIT), wasm2c (Apache-2.0), modulo composer derivato da
Expo (MIT), modulo testo derivato da Bluesky (MIT), fork di `react-native-screens` ed
`react-native-enriched-markdown` (MIT), SDK Clerk iOS (MIT), pod Google (Apache-2.0).
`react-native-pdf-jsi` è MIT (verificato il file LICENSE: nessuna chiave di licenza o clausola
"pro").

**Risultato:** nessun divieto di ridistribuzione, modifica o uso commerciale; nessun obbligo
copyleft che si estenda all'app. Elenco dettagliato: [THIRD-PARTY.md](THIRD-PARTY.md).

## 3. Marchi, loghi, nomi, font, icone, immagini, audio, testi

Trovato nel repo originale:

- **Loghi e icone T3 Code** (`assets/dev`, `assets/nightly`, `assets/prod`, wordmark "T3" in
  `apps/mobile/src/components/T3Wordmark.tsx`, icone widget). I Termini di T3 Code dicono:
  *"You may not use our trademarks, service marks, or trade dress without written permission."*
- **Nome "T3"**: una ricerca web mostra che un altro fork mobile (mikrocode) è stato rinominato
  proprio per non violare il marchio "T3". Per prudenza il fork **non usa "T3" nel proprio nome**
  (né il nome suggerito "T3 Mobile iOS17"): nome scelto **Remote17**; nessuna app con questo nome
  è emersa dalla ricerca.
- **Loghi di terzi** (OpenAI, Anthropic, Antigravity, GitHub, GitLab, ecc.): usati solo per
  identificare il servizio corrispondente (uso nominativo), come nell'app originale.
- **Font**: DM Sans (OFL-1.1), MesloLGS NF (solo Android; Apache-2.0 + glifi Nerd Fonts).
- **Icone**: Tabler (MIT), Lucide (ISC), Pierre (Apache-2.0), Material Symbols (Apache-2.0),
  SF Symbols (forniti dal sistema iOS, non inclusi nel pacchetto).
- **Audio**: nessun file audio nell'app mobile (i suoni CC0 sono solo in web/desktop).
- **Testi con licenza particolare**: nessuno nell'app mobile.

Azioni fatte:

- Nome dell'app, bundle id, schema URL e slug cambiati (Remote17 / `io.github.xillo23.remote17`).
- Icona e splash sostituiti con un'**icona originale** creata per il fork.
- Wordmark/logo T3 rimossi dall'interfaccia (titoli, schermata di caricamento, registro attività).
- "T3 Code" resta solo dove descrive il software originale (es. "Install T3 Code 1.2 on this
  machine", "Sent by T3 Code") e negli avvisi "fork non ufficiale".
- I file di logo T3 restano nel **codice sorgente** del fork (come in ogni fork GitHub, per non
  alterare il resto del monorepo), ma **non sono usati come identità** e non sono inclusi nella
  build iOS del fork.

## 4. Chiavi API, token, certificati e segreti

Metodo: **gitleaks 8.30.1** su tutta la cronologia (`--log-opts=--all`, 34.808 commit, 1,22 GB) e
sull'albero di lavoro; verifica manuale dei risultati fuori dai test, con valori mascherati.

- Cronologia: 279 segnalazioni. Albero: 121 (inclusi pacchetti npm installati).
- Quasi tutte sono **dati finti nei test** e fixture (es. chiavi PEM di test, `sk_test_FAKE…`,
  token GitLab d'esempio), anche nei repo di riferimento vendorizzati in `.repos/`.
- Falsi positivi: nomi di tasti (`keybindings.ts`), chiavi di memoizzazione in patch,
  `sessionKey` interni in un file di piani, l'alfabeto dei codici di abbinamento.
- **Identificatori pubblici** (non segreti per definizione, e documentati come tali in
  `.env.example`: *"These are the same public identifiers baked into official release builds,
  not secrets"*): chiave *publishable* Clerk `pk_live_…`, client ID OAuth della CLI, ID progetto
  EAS, Apple Team ID, URL degli aggiornamenti Expo.
- **Nessun segreto reale trovato.** Nessun token o segreto è stato aggiunto dal fork; il token
  GitHub dell'utente non è mai stato scritto in file del repo.
- Nella build del fork gli identificatori cloud T3 **non sono inclusi** e il workflow fallisce se
  compaiono nella configurazione.
- I report completi di gitleaks sono rimasti in locale e **non sono stati pubblicati**.

## 5. Termini d'uso e Privacy Policy di T3 Code / T3 Connect

Fonti lette nel repo (`apps/marketing/src/pages/terms-of-service.astro`,
`privacy-policy.astro`) e online:

- Terms of Service (in vigore dal 15/07/2026): <https://t3.codes/terms-of-service>
- Privacy Policy (in vigore dal 06/10/2026): <https://t3.codes/privacy-policy>
- Documentazione: [`docs/user/telemetry.md`](docs/user/telemetry.md),
  [`docs/internals/t3-connect.md`](docs/internals/t3-connect.md),
  [`docs/operations/connect-setup.md`](docs/operations/connect-setup.md), [`.env.example`](.env.example)

Punti rilevanti:

1. **Software open source:** *"Your use, copying, modification, and distribution of that source
   code are governed by the license included with the applicable repository … These Terms … do
   not limit rights granted to you by an applicable open-source license."* e *"Where those
   licenses conflict with these Terms for that software, the applicable open-source license
   controls."* → la ridistribuzione di una build del codice MIT è regolata dalla MIT.
2. **Client non ufficiali / build modificate / reverse engineering:** **nessuna clausola** li
   vieta (verificato sia nel sorgente sia sulla pagina pubblicata).
3. **Marchi:** vietato l'uso senza permesso → rispettato (vedi §3).
4. **Uso accettabile:** vietato *"Bypass rate limits, access controls, security measures, or usage
   restrictions"* → il fork non lo fa (vedi §8).
5. I Termini regolano l'uso dei **Servizi** (app ufficiali, app.t3.codes, T3 Connect). La build
   del fork **non usa i servizi ospitati da T3** (niente relay, niente Clerk, niente aggiornamenti
   OTA): parla solo con il server T3 Code dell'utente.
6. Il progetto stesso documenta le build da sorgente (`.env.example`, README mobile) e dichiara in
   `AGENTS.md` che *"A large number of our users run forks."*

**Conclusione:** per il **codice, il workflow e la documentazione** non ci sono ostacoli. Per
l'**IPA** non è stato trovato alcun divieto, purché sia la build in modalità fork (senza
identità T3 e senza servizi T3). La pubblicazione dell'IPA resta comunque sospesa per il motivo
tecnico in §9.

## 6. Termini di servizio e Acceptable Use Policies di GitHub

Fonti (consultate il 04/11/2026):

- GitHub Terms of Service: <https://docs.github.com/en/site-policy/github-terms/github-terms-of-service>
- GitHub Acceptable Use Policies: <https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies>
- Guida DMCA: <https://docs.github.com/en/site-policy/content-removal-policies/guide-to-submitting-a-dmca-takedown-notice>

Risultati:

- Nessuna regola vieta di pubblicare **binari compilati** (Release) di software con licenza
  libera; bisogna avere il diritto di pubblicarli (la MIT lo concede) e rispettarne la licenza.
- Vietati: contenuti che violano diritti di proprietà intellettuale (marchi inclusi → gestito con
  il rebranding), software per aggirare controlli di **chiavi di licenza** (non presente),
  malware (non presente), accesso non autorizzato a servizi (non presente).
- La guida DMCA ricorda il divieto di elusione delle misure tecnologiche di protezione delle
  opere (17 U.S.C. §1201). L'IPA del fork **non è uno strumento di elusione**: è una normale app
  compilata da sorgente MIT. L'installazione richiede però un jailbreak e AppSync Unified, che
  sono strumenti di terzi scelti dall'utente; il fork li nomina come requisito ma non li ospita.
  → **Rischio residuo basso**, segnalato sotto.

## 7. Privacy dell'app

Analisi del codice dell'app mobile (`apps/mobile/src`, `packages/client-runtime`,
`packages/shared`) e della configurazione Expo risolta per la build del fork.

| Servizio esterno | Nel progetto originale | Nella build del fork |
|---|---|---|
| Server T3 Code dell'utente (LAN / Tailscale / URL scelto) | Sì | **Sì** (unico destinatario necessario) |
| Relay T3 Connect `relay.t3.codes` (Cloudflare) | Sì, se configurato | **No** (nessun URL configurato) |
| Autenticazione Clerk `clerk.t3.codes` (+ Google/Apple sign-in) | Sì, se configurato | **No** (nessuna chiave) |
| Crash report / tempi di avvio verso Axiom tramite relay | Sì (disattivabile) | **No** (nessun relay né token) |
| Expo Observe | Endpoint del relay | **No** (`observe.invalid`) |
| Aggiornamenti OTA Expo `u.expo.dev` | Sì | **No** (disattivati) |
| Push Expo / APNs | Sì | **No** (entitlement rimosso, nessun project ID) |
| Servizio favicon di Google per i siti visitati dagli agent | Sì | **No** (rimosso nel fork) |
| Immagini/link presenti nei messaggi o nelle PR (es. GitHub) | Caricati dall'host originale | Invariato, solo quando l'utente apre quel contenuto |
| Server del maintainer del fork | — | **Nessuno** |

Il client si presenta al server come "Remote17 (unofficial iOS client)". Telemetria del
**server** T3 Code (PostHog/Axiom tramite `ingest.t3.codes`): dipende dal server dell'utente ed è
disattivabile con `T3CODE_TELEMETRY_ENABLED=false` (vedi `docs/user/telemetry.md`). Tutto questo è
riportato nel README, sezione *Privacy*.

## 8. Protezioni tecniche, autenticazione e limiti del servizio T3

- Il fork **non modifica** autenticazione, abbinamento (pairing), permessi, protocollo o server,
  e **non contatta** né modifica servizi T3.
- Il login con **account T3** e **T3 Connect** usano Clerk e il relay T3. Il servizio Clerk
  accetta le app native solo se il loro identificativo è autorizzato dagli amministratori T3
  (`docs/operations/connect-setup.md`: *"A private development build using the production Clerk
  key still needs its development callback allowed by that instance's administrator"*; per iOS:
  Apple Team ID + bundle ID registrati). Far funzionare il login nel fork richiederebbe di
  **imitare l'identità dell'app ufficiale** (Team ID/bundle ID) o di far modificare le
  impostazioni del servizio T3: entrambe le cose sono escluse.
- Scelta fatta: nella build del fork queste funzioni **non sono configurate** e il README lo
  dichiara chiaramente. Il collegamento al PC avviene con il **pairing diretto** (LAN/Tailscale),
  funzione standard e senza account.
- **Non verificato su dispositivo:** il comportamento effettivo su un iPad iOS 17 reale non è
  stato provato (vedi §9).

## 9. Pubblicazione: cosa è stato fatto e cosa no

- ✅ Pubblicati sul fork: codice, workflow, documentazione (README, CHANGES, THIRD-PARTY, questo
  file).
- ⛔ **IPA e GitHub Release: NON pubblicati.** Motivo: l'avvio del workflow restituisce
  `HTTP 422 "Actions has been disabled for this user"`. Le impostazioni Actions del repository
  risultano abilitate; il blocco è a livello di account GitHub e si risolve solo dal titolare
  dell'account (impostazioni di fatturazione/budget di Actions) o con il supporto GitHub.
  Senza build, non c'è nulla da pubblicare né da testare.
- Quando una build riuscirà, la Release potrà essere creata solo con l'IPA in modalità fork e con
  note che ripetono avviso non ufficiale, modifiche e clausola di rimozione.
- Nessuna pubblicazione su App Store.

## 10. Rischi residui

1. **Marchi:** anche senza "T3" nel nome, il fork descrive la compatibilità con T3 Code. È un uso
   descrittivo, ma il titolare potrebbe comunque opporsi → clausola di **rimozione su richiesta**
   nel README.
2. **Termini che possono cambiare:** T3 Tools può modificare Termini o politiche; vanno ricontrollati
   prima di ogni Release.
3. **Jailbreak / AppSync Unified:** installare app non firmate da Apple viola le condizioni d'uso
   di iOS per l'utente finale e comporta rischi di sicurezza; il fork lo dichiara ("a proprio
   rischio"). Rischio basso di segnalazioni a GitHub (§6).
4. **Compatibilità reale con iOS 17 non verificata** su dispositivo: possibili crash in librerie
   native. Nessun impatto legale, ma da dichiarare (fatto).
5. **Server T3 Code:** il server dell'utente può inviare telemetria propria (configurabile
   dall'utente, non dal fork).
6. **Fork pubblico dell'intero monorepo:** contiene anche web, desktop, relay e i file di logo
   originali, ridistribuiti sotto MIT come in ogni fork GitHub.

---

*Documento redatto il 04/11/2026. Non costituisce consulenza legale.*
