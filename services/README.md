#GraphQl & Sequelize Demo Project

## Getting the database setup

you will need Docker in order to install a containerised Mysql dev
environment. After getting docker, run the following command anywhere:

```sh
docker run \
    -p 0.0.0.0:7999:3306 \
    --name gsd-db \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_USER=gsd-dev \
    -e MYSQL_PASSWORD=password \
    -e MYSQL_DATABASE=gsd \
    -d mysql:5.7.20
```

this will create a Docker instance called `gsd-db`, running Mysql
v5.7.20 with root password being `password`. It also creates a 
database called `gsd`, creates a user called `gsd-dev` (with password
`password`) and assigns that user full permissions onto `gsd`
database.
