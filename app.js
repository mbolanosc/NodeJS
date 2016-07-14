/*Libreria para un servidor*/
var http = require('http');

var server = http.createServer(
	function(request,response){
		//200 means ok
		response.writeHead(200,{
			'Content-Type': 'text/plain'
		});
		response.end('Hola Mundo!');
	}
);
//Decirle que escuche un servidor, listen tiene una funcion un callback que 
//cuando ya esta escuchando ejecuta una funcion
server.listen(8000,function(){
	console.log('Servidor escuchando puerto 8000');
});