const express = require('express');
const session = require('express-session');

const app = express();

//Importando mySQL session
const mySQLStore = require('express-mysql-session');
//Configurando nuestro acceso a la base de datos
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin7',
    database: 'prueba_session'
}

//Guardando la session en la base de datos con NODE y EXPRESS
const sessionStore = new mySQLStore(options);
//Creando una cookie para el usuario
app.use(session({
    key: 'cookie_usuario',
    secret: '987654321',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))

//Vamos a guardar las sesiones ejemplo simple
// app.use(session({
//     secret:'1234567',
//     resave: true,
//     saveUninitialized: true
// }))

//Estos datos que contiene "session." guardaremos en la cookie y en la base de datos
app.get('/', (req, res)=>{
    req.session.usuario = 'Juan Perez';
    req.session.rol = 'Admin';
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    console.log(req.session);
    res.send(`El usuario <strong>${req.session.usuario}<strong>
            con rol <strong>${req.session.rol}</strong> ha visitado esta página ${req.session.visitas} veces`)
})

//Habilitamos el puerto para levantar el servidor
app.listen(3000, (req, res)=>{
    console.log("SERVER UP!");
});