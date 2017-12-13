


var connection = new WebSocket("ws://localhost:8080/echo");

connection.onopen = function () {
	connection.send('Kill me please, everyday in my life is suffering');

}

connection.onerror = function(e) {
	console.log("WS error: " + e);
}

connection.onmessage = function(msg) {
	console.log("WS message: " + msg.data);
	//te llega el mensaje en json y con esto tenemos que hacer cosas JSON.parse(objeto a transfomar msg.data) lo convierte en objeto y con esto deberiamos actualizar posciones
	var ejemplo = JSON.parse(msg.data);
}
