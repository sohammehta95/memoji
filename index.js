exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.memify = function(obj) {
	if(obj.gender=='male')
		console.log("Male");
	else
		console.log("Female");
}