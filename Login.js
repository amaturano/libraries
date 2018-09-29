var TAG = "[Login.js] : ";
var API = require("remoteAPI");

(function constructor(args){
	
})($.args);


function doLogin(){
	var user = $.txtUser.value;
	var pass = $.txtPass.value;
		
	
	if(user == "" || user == null)
		alert("Favor de ingresar un usuario valido");
	else if(pass == "")
		alert("El campo contraseña no puede ir vacio");
	else
		API.login({
						"userName": user,
					  	"password": pass,
					  	"dominio": "Monterrey",
					  	"tipoAuth": 1 ,
					  	"nombreSistema": "AJUSTESMOVIL",
					  	"sistemaid": "sda"
					},{
						onload : function(rsp){
							log.info(TAG, "RESPONSE = " + JSON.stringify(rsp));
							alert(JSON.stringify(rsp));
						},
						onerror	: function(rsp){
							
						}
					});
		//alert("Usuario : " + user + " Password: " + pass);
	
	
};
