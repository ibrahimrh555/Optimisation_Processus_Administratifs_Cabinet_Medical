# Strategie Git

## Branches permanentes

- `main` : ancienne version historique ;
- `version-actuelle` : sauvegarde immuable de l'ancienne application ;
- `develop-v2` : integration de la nouvelle version.

## Branches de travail

- `feature/nom-fonctionnalite` ;
- `fix/nom-correction` ;
- `docs/nom-documentation` ;
- `chore/nom-tache-technique`.

Chaque fonctionnalite part de `develop-v2` et revient par pull request apres validation des tests.

## Convention des commits

- `feat:` nouvelle fonctionnalite ;
- `fix:` correction ;
- `test:` tests ;
- `docs:` documentation ;
- `refactor:` restructuration sans changement fonctionnel ;
- `chore:` configuration et maintenance.
