# Backend

API Spring Boot du projet Cabinet Medical.

## Prerequis

- Java 17
- Maven 3.9+
- PostgreSQL 17 ou Docker Compose

## Lancement

Depuis la racine, lancer PostgreSQL avec `docker compose up -d postgres`, puis executer `mvn spring-boot:run` dans ce dossier.

Endpoint public de verification : `GET /api/health`.
