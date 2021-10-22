# Crypto Monitor

## <a href="https://app.swaggerhub.com/apis-docs/eddylson/WChallenge/1.0.0"> Documentación </a>

## <p> Requisitos </p>

<a href="https://www.npmjs.com/"> 
<img src="https://img.shields.io/npm/v/npm"> </a>
<a href="https://nodejs.org/es/"> 
<img src="https://img.shields.io/badge/node%40latest-%3E%3D%2016.0.0-brightgreen"> 
</a>

## Herramientas usadas

### <ul>

### <li><a href="https://webpack.js.org/"> webpack </a> </li>

### <li> <a href="https://sequelize.org/master/manual/getting-started.html"> Sequelize </a></li>

### <li> <a href="https://sequelize.org/master/manual/migrations.html"> Sequelize-cli </a> </li>

### <li> <a href="https://www.mysql.com/"> Mysql</a> </li>

### <li> <a href="https://expressjs.com/es/"> Express</a> </li>

### <li> <a href="https://pm2.keymetrics.io/"> Pm2 </a> </li>

</ul>
 
## Instrucciones de instalación.

```bash
    git clone git@github.com:edilsonlonC/WChallenge-cryptocurrencies-monitor.git
    cd WChallenge-cryptocurrencies-monitor
    cp .env-example .env
    npm install
```

## Configuraciones

#### Las variables de entorno se pueden cargar desde el archivo .env

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_DIALECT=
```

### o en los archivos de configuración

#### src/config/config.js

```js
export const config = {
  secretKeyJwt: process.env.secretKeyJwt || '',
  secretKeyRefreshToken: process.env.secretKeyRefreshToken || '',
  defaultLang: process.env.defaultLang || '',
  versionApi: process.env.versionApi || '',
  minExpiredSession: process.env.minExpiredSession,
};
```

#### src/config/config-db.js

```js
module.exports = {
  development: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  test: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
```

### Al configurar todas la variables de entorno se pueden hacer las migraciones y ejecutar los seeders de la base de datos

```bash
     npm run migrate
     npm run seed
```

#### npm run migrate crea la base de datos por medio de las migraciones

#### en la carpeta src/migrations

#### y el comando npm run seed creara elementos de la base de datos necesarios

<br>

### Para ejecutar el entorno de desarrollo
``` bash
  npm run dev
```

### Para generar el archivo empaquetado para producción

```bash
    npm run build
    pm2 start ecosystem.config.js
```

# Estructura del proyecto

## Rutas

### [Rutas del proyecto](src/routes/README.md)

## Servicios

### [Servicios coingecko](https://github.com/miscavage/CoinGecko-API)
