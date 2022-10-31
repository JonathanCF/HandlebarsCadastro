const express = require('express');
const app = express();
const port = 4500;
const router = require('./routes/routes')
const { engine } = require('express-handlebars')
const ControllerForm = require('./Controllers/ControllersForm')
const Handlebars = require('handlebars');

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

app.use(express.urlencoded({extended: true}))
// ------------- ROTA

app.use('/', router)
app.use('/add', router)
app.use('/lista', router)



app.listen(port, ()=>{
	console.log('Servidor rodando na port 4500');
})