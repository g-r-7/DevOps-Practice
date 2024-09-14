# Documentation de l'API

# Backend App
## Variables d'environnement

#### Backend

- PG_DB: Base de donnée Postgres à utiliser `(default: Employee)`
- PG_USER: Nom d'utilisateur de postgres `(default: postgres)`
- PG_PASSWORD: Mot de passe de postgres `(default: password)`
- PG_HOST: adresse de la machine  `(default: database)`
- PORT: port d'écoute de l'applications `(default: 8887)`

#### Postgres

- POSTGRES_DB: Base de donnéee à créer au démarrage `(default: Employee)`
- POSTGRES_USER: Nom d'utilisateur de la BD Postgres `(default: postgres)`
- POSTGRES_PASSWORD: Mot de passe de la BD Postgres `(default: password)`


### Exécute docker backend

```bash	
> docker run -d -p8887:8887 --name backapp1 --net my-network -e PG_DB=Employee -e PG_USER=postgres -e PG_PASSWORD=password -e PG_HOST=database gr77/backapp:v1.0.0
```

### Exécute docker database postgres

```bash	
> docker run -d -p5432:5432 --name database --net my-network -e POSTGRES_DB=Employee -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -v db-data:/var/lib/postgresql/data postgres
```

## Run with docker compose:

```bash	
> docker compose -t build gr77/backapp:v2.0.0
> docker compose push gr77/backapp:v2.0.0
> docker compose up
```

<br>
<br>

[Lien de Référence](https://dev.to/francescoxx/build-a-crud-rest-api-in-javascript-using-nodejs-express-postgres-docker-jkb)