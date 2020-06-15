# fullstack-interview-test

## Requerimientos

Para funcionar ambos nececitan tener instalada la herramienta **Make**
la cual si estas en Linux o Mac OS X ya la tienes instalada

### Backend
- Docker
### Frontend
- Node.js 8 with NPM (carbon)

## Como inciar

Agrega tu propia key de Github a el archivo `docker-compose.yml` en la
key `GITHUB_OAUTH_TOKEN`

**¡IMPORTANTE!**: Antes que nada, se debe ejecutar el comando `make`,
este traera todas las dependencias de los dos proyectos

Los comandos para iniciar son:

- `make back` para iniciar el backend
- `make front` para iniciar el frontend

> Deben ser iniciadas en terminales distintas

## Pruebas

No esta testeado al full algo es algo, para correrlas debes entrar al
folder `backend` y correr el comando `npm test`

## Despliegue

- El Backend se puede desplegar con la imagen Docker
- Para el Frontend primero se debe establecer la variable de entorno
`REACT_APP_API_URL` con el url de donde se desplego el Backend, se
compila con el comando `npm run build`, este generara una carpeta llamada
`build` la cual es la que debemos subir a nuestro servidor web de
archivos estaticos

## Cosas que destacar

- Implementacion propia de el API de Github
- Framework CSS [Materializa](https://materializecss.com/)
- Hecho en React
- Backend en Node.js con Express.js
- Base de datos MongoDB
