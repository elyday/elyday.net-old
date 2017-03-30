var express = require('./node_modules/express');
var app = express();

/////////////////////////////////////////////

var port = process.env.PORT || 88;

/////////////////////////////////////////////

app.set('views', __dirname+'/views');
app.set(express.static('./public'));
app.set('view engine', 'jade');
app.use(express.static('./public'));
app.locals.moment = require('./node_modules/moment');
app.use(function(req, res, next){
	res.setHeader('X-Powered-By', 'Lars');
	next();
});

/////////////////////////////////////////////

app.get('/', function(req, res) {
	res.render('index', {title: 'Startseite'});
});

app.get('/imprint', function(req, res) {
	res.render('imprint', {title: 'Impressum'});
});

app.get('/privacy', function(req, res) {
	res.render('privacy', {title: 'Datenschutz'});
});

app.get('/robots.txt', function(req, res) {
	res.sendFile(__dirname + '/public/robots.txt');
});

/////////////////////////////////////////////

//CSS
app.get('/robots.txt', function(req, res) {
	res.sendFile(__dirname + '/public/robots.txt');
});

app.get('/css/bootstrap.min.css', function(req, res) {
	res.sendFile(__dirname + '/public/css/bootstrap.min.css');
});

app.get('/css/animate.min.css', function(req, res) {
	res.sendFile(__dirname + '/public/css/animate.min.css');
});

app.get('/css/creative.css', function(req, res) {
	res.sendFile(__dirname + '/public/css/creative.css');
});

//JS
app.get('/js/jquery.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/jquery.js');
});

app.get('/js/bootstrap.min.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/bootstrap.min.js');
});

app.get('/js/jquery.easing.min.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/jquery.easing.min.js');
});

app.get('/js/jquery.fittext.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/jquery.fittext.js');
});

app.get('/js/wow.min.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/wow.min.js');
});

app.get('/js/creative.js', function(req, res) {
	res.sendFile(__dirname + '/public/js/creative.js');
});

//IMG
app.get('/img/portfolio/ucp.png', function(req, res) {
	res.sendFile(__dirname + '/public/img/portfolio/ucp.png');
});

app.get('/img/portfolio/s4yt.png', function(req, res) {
	res.sendFile(__dirname + '/public/img/portfolio/s4yt.png');
});

app.get('/img/about.jpg', function(req, res) {
	res.sendFile(__dirname + '/public/img/about.jpg');
});

app.get('/img/contact.jpg', function(req, res) {
	res.sendFile(__dirname + '/public/img/contact.jpg');
});

/////////////////////////////////////////////

app.listen(port, function() {
	console.log('Online auf Port: ' + port);
});

//404 Handling
app.use(function(req, res, next){
	res.status(404).redirect('/');
});
