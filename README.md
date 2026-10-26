# Mes pneus

Suivi de l'usure des pneus été/hiver (Honda HR-V, Mercedes GLB), usage personnel.
Les données sont enregistrées dans le navigateur de l'appareil (localStorage), pas dans ce dépôt.

## Mettre en ligne (GitHub Pages)
1. Crée un dépôt GitHub et envoie-y tous les fichiers de ce dossier (à la racine).
2. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Ouvre l'adresse `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/` après une minute.

## Installer sur le téléphone
- Android (Chrome) : menu ⋮ → « Installer l'application » / « Ajouter à l'écran d'accueil ».
- iPhone (Safari) : Partager → « Sur l'écran d'accueil ».

## Crédits
- Honda HR-V : timadrianh, CC-BY 4.0 (Sketchfab).
- Mercedes GLB : modèle fourni par le propriétaire du dépôt ; vérifie sa licence avant de rendre le dépôt public.
- three.js (MIT) dans `libs/`.

## Sauvegarde cloud (Firebase) : pour ne plus perdre tes données
Les données restent aussi dans le navigateur, mais avec Firebase elles sont copiées dans ton compte Google : tu te reconnectes après avoir vidé tes données et tout revient.
1. Va sur https://console.firebase.google.com puis « Ajouter un projet » (Analytics inutile).
2. Dans le projet : **Build → Authentication → Commencer → Google → Activer** (choisis ton e-mail d'assistance).
3. **Authentication → Settings → Domaines autorisés → Ajouter** : `ton-pseudo.github.io`.
4. **Build → Firestore Database → Créer une base de données** (mode production, région Europe).
5. Onglet **Règles** de Firestore : colle le contenu de `firestore.rules`, puis Publier.
6. **Paramètres du projet (roue dentée) → Vos applications → icône web `</>`** : enregistre l'app, copie l'objet `firebaseConfig` et colle-le dans `firebase-config.js` à la place de `null` (exemple dans le fichier).
7. Envoie les fichiers modifiés sur GitHub, ouvre l'application, puis en bas : **Se connecter avec Google**.

La clé `apiKey` est publique par conception : la sécurité vient des règles Firestore, qui n'autorisent que ton propre compte à lire et écrire tes données.

## Sauvegarde manuelle
En bas de l'application, **Exporter** télécharge un fichier JSON et **Importer** le restaure. À faire de temps en temps, même avec le cloud.
