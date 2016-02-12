

var rabbitmq  = {
	push : function (conn, to, from) {
		// Wait for connection to become established.

		var callDetails = {'to':to, 'from': from};
		var encoded_payload = JSON.stringify(callDetails); 
		console.log(callDetails); 
		conn.publish('4444q', callDetails);
	}
}

module.exports = rabbitmq;

