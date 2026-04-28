# Allociné Lab - Angular & Spring Boot

Projet d'application web pour la gestion de films, composé d'un backend Spring Boot et d'un frontend Angular.

## Structure du projet

- `/angular-lab` : Backend Java Spring Boot avec base de données (via Docker).
- `/frontend` : Application frontend Angular.

## Installation et Lancement

### 1. Backend
Nécessite Docker.
```bash
cd angular-lab
docker compose up
```
L'API est accessible via Swagger : [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

### 2. Frontend
Nécessite Node.js et Angular CLI.
```bash
cd frontend
npm install
ng serve
```
L'application est accessible à l'adresse : [http://localhost:4200/](http://localhost:4200/)

## Auteurs
- Raphael Vazzano
- Jules Valance
- Corentin Schiebel
- Mohamed-Yazid Kers
