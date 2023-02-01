const express = require('express');
const session = require('express-session');

const app = express();

//Importando mySQL session
const mySQLStore = require('express-mysql-session');
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'prueba_session'
}

//Vamos a guardar las sesiones ejemplo simple
// app.use(session({
//     secret:'1234567',
//     resave: true,
//     saveUninitialized: true
// }))


app.get('/', (req, res)=>{
    req.session.usuario = 'Juan Perez';
    req.session.rol = 'Admin';
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    console.log(req.session);
    res.send(`El usuario <strong>${req.session.usuario}<strong>
            con rol <strong>${req.session.rol}</strong> ha visitado esta página ${req.session.visitas} veces`)
})

app.listen(3000, (req, res)=>{
    console.log("SERVER UP!");
});