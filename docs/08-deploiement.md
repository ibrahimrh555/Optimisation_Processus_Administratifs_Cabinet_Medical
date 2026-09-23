# Deploiement

## Architecture

- Frontend React : GitHub Pages.
- API Spring Boot : Heroku Eco.
- PostgreSQL : Neon.
- Branche de production : `deployment`.

## 1. Neon

Creer un projet `cabinet-medical`, puis relever les informations de connexion directe : hote, base, utilisateur et mot de passe.

La variable JDBC doit suivre ce format :

```text
jdbc:postgresql://HOST/BASE?sslmode=require
```

Ne jamais enregistrer les vraies valeurs dans Git.

## 2. Heroku

Attention : Heroku ne propose pas de plan gratuit. Le plan Eco coute 5 USD par mois et se met en veille apres une periode d'inactivite.

1. Creer une application Heroku, par exemple `cabinet-medical-api`.
2. Dans `Settings > Buildpacks`, verifier que le buildpack Java est utilise.
3. Dans `Deploy`, connecter ce depot GitHub et choisir la branche `deployment`.
4. Activer `Automatic deploys` apres validation du premier deploiement manuel.

Le `pom.xml` racine permet a Heroku de detecter le projet Maven dans ce monorepo. Le `Procfile` demarre le fichier JAR produit dans `backend/target` et Spring Boot ecoute automatiquement le port fourni par Heroku.

Renseigner les variables secretes suivantes :

```text
DATABASE_URL=jdbc:postgresql://HOST/BASE?sslmode=require
DATABASE_USERNAME=utilisateur_neon
DATABASE_PASSWORD=mot_de_passe_neon
FRONTEND_URL=https://ibrahimrh555.github.io
```

Ces valeurs se configurent dans `Settings > Config Vars`. Pour Neon, `DATABASE_URL` doit etre une URL JDBC, et non l'URL `postgresql://` affichee par defaut.

Verifier ensuite :

```text
https://NOM_APPLICATION.herokuapp.com/api/health
```

## 3. GitHub Pages

Dans `Settings > Secrets and variables > Actions`, ajouter :

```text
VITE_API_URL=https://NOM_APPLICATION.herokuapp.com/api
```

Dans `Settings > Pages`, selectionner `GitHub Actions` comme source.

Le workflow `.github/workflows/deploy-frontend.yml` compile et publie automatiquement le frontend a chaque modification de `frontend/` sur la branche `deployment`.

URL attendue :

```text
https://ibrahimrh555.github.io/Optimisation_Processus_Administratifs_Cabinet_Medical/
```

## 4. Verification finale

1. `/api/health` retourne `UP`.
2. Le frontend GitHub Pages s'affiche sans erreur 404.
3. Les appels reseau ciblent l'URL Heroku.
4. Le navigateur ne signale aucune erreur CORS.
5. Flyway applique les migrations sur Neon.
