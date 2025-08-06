---
title: Alts Bot
publishDate: 07/08/2024
description: Un Bot de discord.
category: blog
image: {
    src: "/alts.webp",
    alt: "Logo bot alts"
}
---

## Alts-Bot
Uno de mis tantos proyectos que almenos podria decirse que este si terminé. Aunque siempre se puede mejorar/ampliar.

Un bot para Discord con objetivo de organizar principalmente eventos de grupos tipicos de los juegos MMORPG.
Al principio solo tenia un par de comandos para montar grupos clasificados por roles, pero con el tiempo lo he ido actualizando y añadiendo extras.

El bot esta programado en JavaScript. Fué una buena forma de poner en practica para aprender mejor JavaScript ya que solia llevarlo regular. 

Actualmente no está en ningún host, ya que no he encontrado ninguno de gratis y tampoco he tenido necesidad de usarlo por ahora. Pero quien sabe en el futuro.

## Comandos

- **/help:** Información de los comandos.
- **/report:** Envia un mensaje privado al admin del bot.
- **/vote:** Genera un cuestionario de votos.
- **/evento:** Para crear el evento distribuido en 3 roles (tank, dps y heal).
- **/ping:** Test de conectividad.
- **/edit:** Permite modificar algunos cuadros de texto del bot que tengan habilitado el emoji del lapiz.
- **/notice:** Permite mandar un mensaje con algunos estilos.
- **/adduser evento:** Permite añadir un usuario a un evento activo sin necesidad que reaccione para apuntarse.
- **/removeuser evento:** Permite retirar un usuario apuntado al evento sin realizar las acciones de reacción a los emojis.

## Ejemplos

No voy a poner todos los casos pero si los dos más importantes.

### /evento

Este es el principal de todos por el que fué creado el bot. Es bastante basico pero sirve para cualquier evento que quieras planificar y que la gente se apunte.

![evento bot discord](/ds-bot-evento.png)

La cruz es para eliminar el evento y el lapiz para editarlo. El bot te mandará un privado preguntandote que deseas editar.

![evento bot discord edit](/ds-bot-edit-evento.png)

### /vote

Este aun tiene que mejorarse, ya que no tiene ningún temporizador que seria lo interesante. Pero si quieres hacer unos votos rapiditos sirve bastante bien.

![vote bot discord](/ds-bot-vote.png)

## Ejecución

El código es público por lo que se puede visualizar mi código espagueti xD.

[Bot discord](https://github.com/OriolGarciaFores/Event-bot)

Requiere de tener instalado Node.js previamente para poder ejecutar los comandos.

Instalación de las dependencias del proyecto con:

```
npm install
```

Necesario fichero variables de entorno .env para arrancar la configuración del bot con las siguientes variables:
```
TOKEN=codigo_token
ID_OWNER=usuarioAdminID
CLIENT_ID=clientId
LOG_INFO=true
LOG_DEBUG=true
LOG_ERROR=true
LOG_WARN=true
LOG_SUCCESS=true
```
Arranque con:
```
npm start
```
