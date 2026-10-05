# KAG - Kosova Arsenal Group (React + Vite + Tailwind + Firebase Auth)

## 1. Instalimi

```bash
npm install
npm run dev
```

## 2. Konfigurimi i Firebase (për login-in e adminit)

Pa këtë hap, faqja publike funksionon normalisht, por `/admin` nuk do të punojë.

1. Shko te **https://console.firebase.google.com**
2. Kliko **"Add project"** → jepi emrin `kag-arsenal` (ose çfarëdo) → vazhdo deri në fund (falas, plani "Spark")
3. Brenda projektit, kliko ikonën **`</>`** ("Web app") për të regjistruar një aplikacion web → jepi një emër → "Register app"
4. Firebase do të të japë një objekt `firebaseConfig` me disa çelësa (`apiKey`, `projectId`, etj.) — **kopjoji**
5. Hap skedarin `src/lib/firebase.js` dhe zëvendëso vlerat placeholder me ato që kopjove
6. Në menunë e majtë të Firebase Console, shko te **Authentication** → "Get started" → aktivizo:
   - **Email/Password** (toggle "Enable" → Save)
   - **Google** (toggle "Enable" → zgjidh email support → Save)
7. Shko te **Firestore Database** → "Create database" → zgjidh "Start in production mode" → zgjidh një lokacion (p.sh. europe-west) → "Enable"
8. Te Firestore → tab "Rules", zëvendëso rregullat me këto (lejon lexim publik, shkrim vetëm për ty) dhe kliko "Publish":

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /content/{docId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "daris.shala19@gmail.com";
    }
  }
}
```

## 3. Krijo llogarinë tënde të admin-it (email/password)

Në Firebase Console → Authentication → tab "Users" → "Add user" → shkruaj email-in tënd
(`daris.shala19@gmail.com`) dhe një fjalëkalim. Kjo llogari (si dhe çdo llogari Google me
këtë email) do të ketë qasje te `/admin`.

Lista e email-eve të lejuara për panelin e adminit gjendet te:
```
src/lib/firebase.js  →  ADMIN_EMAILS
```

## 4. Qasja te paneli

- Faqja kryesore: `http://localhost:5173`
- Login i adminit: `http://localhost:5173/admin/login`
- Paneli (pas login-it): `http://localhost:5173/admin`

Nga paneli mund të ndryshosh tekstin e seksionit "Status Aktual" (shqip + anglisht) —
ndryshimet shfaqen menjëherë te faqja publike.

## 5. Publikimi (deploy)

```bash
npm run build
```

Ngarko folderin `dist/` te **Netlify** ose **Vercel** (falas), njësoj si projektet e
tjera. Mos harro: domeni final duhet shtuar te Firebase Console → Authentication →
Settings → "Authorized domains", përndryshe login-i me Google refuzohet nga ai domen.
