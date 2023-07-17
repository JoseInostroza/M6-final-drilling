#M6 crud y testing con node.js, express, y archivos .json
***
##Descripcion
Entrega final del modulo 6 para Edutecno, en donde se aplican conocimientos de node.js, express y manejar las peticiones CRUD hacia una base de datos representada en un documento .json
##Estado
*En desarrollo 
*Pendientes: 
    *Filtro de busqueda
    *Front con handlebars y bostrap      
##Instalaciones 
###entorno de produccion
*Node.js: (https://nodejs.org/es) npm init -y
*express: (https://www.npmjs.com/package/express) npm i express
*uuid: (https://www.npmjs.com/package/uuid) npm i uuid
###entorno de desarrollo
*nodemon: (https://www.npmjs.com/package/nodemon) npm i nodemon, npx nodemon index.js
##Uso 
* usa 'npx nodemon index.js' o 'node index.js' (para abrir el cliente y escuchar las peticiones)
*ve a la carpeta 'cliente' y selecciona el archivo 'test.http'
*ejecuta las ordenes "Send Request" en la primera fila (para ver el estado original de la base de datos)
*ejecuta las peticiones en "Send Request" en orden desendiente para ver como cambia la base
*ve a la carpeta db en el archivo "animes.json" podras conforma la persistencia de todos los cambios