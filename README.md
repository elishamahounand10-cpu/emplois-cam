# Emploi Cam

Maquette responsive et installable de la plateforme du projet EMPLOI CAM, conçue pour mettre en relation les étudiants et les entreprises au Cameroun.

## Deux espaces d'application

- **Espace étudiant** : page d'accueil et de recherche. Installez l'application « Emploi Cam Étudiant » depuis l'espace étudiant.
- **Espace entreprise** : tableau de bord séparé pour le profil employeur et le suivi des offres. Installez séparément l'application « Emploi Cam Recruteur » depuis l'espace entreprise.

Les deux raccourcis d'installation ouvrent les mêmes ressources front-end mais directement dans l'espace correspondant.

## Lancer en local

À partir de ce dossier, démarrez un serveur web local :

```powershell
python -m http.server 4173
```

Ouvrez ensuite <http://localhost:4173/?espace=etudiant&vue=connexion> ou <http://localhost:4173/?espace=entreprise&vue=connexion> pour voir les deux pages d'accueil et de session inspirées des captures. Les vues de la maquette restent disponibles sur <http://localhost:4173/?espace=etudiant> et <http://localhost:4173/?espace=entreprise>. Utilisez un serveur local plutôt que d'ouvrir `index.html` directement pour activer le mode hors connexion et l'installation PWA. Aucun paquet à installer n'est nécessaire.

## Publier sur Netlify

Le dépôt GitHub du projet est <https://github.com/ehounand-ai/emploi-cam>. Dans Netlify, choisissez **Add new site** puis **Import an existing project**, connectez GitHub et sélectionnez `ehounand-ai/emploi-cam`. Le fichier `netlify.toml` configure le dossier publié (`.`) ; aucun outil de compilation n'est nécessaire. Après le premier déploiement, Netlify fournira une adresse publique en `https://<nom-du-site>.netlify.app`.

Les pages des deux espaces sont accessibles avec les paramètres `?espace=etudiant&vue=connexion` et `?espace=entreprise&vue=connexion`. L'adresse Netlify permettra d'y accéder depuis un téléphone ou un autre appareil connecté à Internet. Ce site est une maquette publique : ne publiez ni ne saisissez de vrais mots de passe, pièces d'identité ou informations personnelles. Une protection fiable par mot de passe doit être configurée côté hébergeur et ne peut pas être ajoutée uniquement dans les fichiers front-end.

## Fonctionnalités de la maquette

- Recherche par métier, entreprise, ville, domaine et compétence.
- Filtres par type d'opportunité et par ville.
- Enregistrement d'offres, suivi de candidatures et édition d'un profil de démonstration.
- Détail complet d'une offre avec date d'ajout, date d'expiration et compte à rebours actualisé chaque seconde.
- Nombre de places restantes, favori accessible depuis une offre, et tableau de bord de suivi des propositions.
- Parcours de demande de vérification du profil entreprise et du statut étudiant.
- Les nouvelles offres sont placées dans une file d'attente et ne sont jamais exposées aux candidats sans approbation.
- Notifications locales liées aux actions et aux deux espaces.
- Interface adaptée aux mobiles et ajout à l'écran d'accueil sur les navigateurs compatibles.
- Deux manifestes PWA distincts : `manifest.webmanifest` pour les étudiants et `entreprise.webmanifest` pour les recruteurs.
- Pages d'accueil et formulaires de connexion/inscription de démonstration propres aux étudiants et aux employeurs.
- Shell de l'application disponible hors connexion après une première visite en ligne.

## Limites de cette version

Cette version est un prototype front-end, pas un service de recrutement : les formulaires de connexion n'ouvrent pas de session et n'envoient ni ne conservent les mots de passe. Les inscriptions et la récupération de compte sont des maquettes sans création de compte ni envoi de courriel. Les entreprises affichées côté étudiant sont fictives et explicitement non vérifiées. Les demandes de vérification et les annonces sont seulement stockées localement en attente ; aucun courriel de validation n'est envoyé, aucune personne ne les examine, et aucune annonce n'est publiée. Les pièces sélectionnées dans le formulaire étudiant ne sont ni lues ni téléversées et sont oubliées à la fermeture du formulaire. Les notifications ne sont pas des push ni des courriels. Le compteur de postes est une simulation locale, pas un registre de recrutements fiable.

Ne saisissez et ne joignez pas de données personnelles ou de documents réels dans cette maquette. Avant un lancement public, il faut un backend HTTPS et une base de données avec contrôle d'accès, authentification, stockage chiffré des justificatifs, procédure d'examen et d'approbation par une équipe habilitée, validation des contacts et des domaines d'entreprise, application atomique des candidatures et des places restantes, notifications serveur (courriel et push), règles de conservation et procédure de suppression des documents.
