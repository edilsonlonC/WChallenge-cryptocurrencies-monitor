# Pre requisitos
<a href="https://www.npmjs.com/"> 
<img src="https://img.shields.io/npm/v/npm"> </a>
<a href="https://nodejs.org/es/"> 
<img src="https://img.shields.io/badge/node%40latest-%3E%3D%2016.0.0-brightgreen"> 
</a>

# Herramientas usadas
<ul>
    <li> webpack </li>
    <li> sequelize </li>
    <li> sequelize-cli </li>
    <li> mysql </li>
</ul>
 
# Instrucciones de instalación.

```bash
    git clone git@github.com:edilsonlonC/WChallenge-cryptocurrencies-monitor.git
    cd WChallenge-cryptocurrencies-monitor
    npm install
    npm run dev
    cp .env.example .env
```

Para generar el archivo empaquetado

```bash
    npm run build
    pm2 start ecosystem.js
```

Quedara ejecutandose en segundo plano

# Configuraciones
#### Las variables de entorno se pueden cargar desde el archivo .env

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_DIALECT=
```
### o en el arhivo src/config/config.js 
``` js
export const config = {
  secretKeyJwt: process.env.secretKeyJwt || '',
  secretKeyRefreshToken:
    process.env.secretKeyRefreshToken || '',
  defaultLang: process.env.defaultLang || '',
  versionApi: process.env.versionApi || '',
  minExpiredSession: process.env.minExpiredSession,
};

```


### src/config/config-db.js

``` js
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

# Estructura del proyecto

## Rutas
[a relative link](src/routes/README.md)