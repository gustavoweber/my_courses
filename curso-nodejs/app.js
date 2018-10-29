var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaFormulario = require('./app/routes/formulario')(app);

app.listen(3001, function() {
    console.log('Serve ON');
});