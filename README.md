# testing-developers

Start docker container with postgres db for development
```
docker run -d -p 5432:5432 -e POSTGRESQL_USER=tdev -e POSTGRESQL_PASS=123 -e POSTGRESQL_DB=tdev orchardup/postgresql
```
