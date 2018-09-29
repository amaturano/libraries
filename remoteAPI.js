var remoteAPI = (function(){
	
	var TAG = "[remoteAPI.js] : ";
	var networl = require("NETWORK");
	var log = require("Log");
	
	function login(_data, _callback){
		log.info(TAG, "login...");
		
		_callback.onload || (_callback.onload = function(){});
		
		networl.post({
			page 	: "Login/LoginUsuario",
			data	: _data,
			success	: _callback.onload,
			fail	: _callback.onerror,
			headers	: {
				"Content-Type"	: "application/json"
			}
		});
	};
	
	return {
		login : login
	};
	
})();

module.exports = remoteAPI;