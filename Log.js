var Log = (function(){
	var logsEnabled = Alloy.CFG.logsEnabled;
	//Private Members
	function info(tag, message){
		logsEnabled && console.log(tag,message);
	}

	function warn(tag, message){
		logsEnabled && console.warn(tag,message);
	}

	function error(tag, message){
		//(tag, e, isWS, detail)
		logsEnabled && console.error(tag,message);
		/*var isWS = isWS || false; 
		
		var date = new Date();
		date.setTime(date.getTime());
		var year = date.getFullYear();
		var month = date.getMonth();
		month = parseInt(month) + 1;
		month = month < 10 ? '0' + String(month) : String(month);
		var day = date.getDate();
		day = day < 10 ? '0' + day : day;
		var hours = date.getHours();
		hours = hours < 10 ? '0' + hours : hours;
		var minutes = date.getMinutes();
		minutes = minutes < 10 ? '0' + minutes : minutes;
		var seconds = date.getSeconds();
		seconds = seconds < 10 ? '0' + seconds : seconds;
		var milliseconds = date.getMilliseconds();
		var d = "\n[" + year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + "." + milliseconds + "]";
		var errstr = " Error en ";
		var linestr = " Linea: ";
		var msgstr = " Mensaje: ";
		var str1 = " Error en Servicio Web: ";
		var str2 = " Estatus: ";
		var str3 = " Mensaje: ";		
		var str4 = " Url: ";
		var str5 = " Metodo: ";	
		var str6 = " Parametros: ";			
		var str7 = " Response: ";
		var fullmsg = "";		
		
		
		if(isWS){
			
			params = (detail.Method == "POST")? str6 + detail.Params : "";
			fullmsg = 	d + str1 + detail.Name + str2 + detail.Status + str3 + detail.Message + str4 + detail.Url + str5 + detail.Method + params + str7 + detail.ResonseText;
			
		} else {
		
			var temp = e.stack.split("\n");
			var myerror = {};
		
			for (var i = 0,
			    ilen = myerror.length; i < 2; i++) {
				Ti.API.warn(temp[i]);
				temp[i] = temp[i].split(":");
			}
		
			myerror.message = temp[0][1].substr(1);
			myerror.file = temp[1][0].substr(7).replace(/\(/g, "");
			myerror.line = temp[1][1] + ":" + temp[1][2].replace(/\)/g, "");
		
			fullmsg = d + errstr + myerror.file + linestr + myerror.line + msgstr + myerror.message;
					
		}
		
		logsEnabled && setTimeout(function() {
			alert(fullmsg);
		}, 1000);
		console.error(tag, fullmsg.toUpperCase());

		info(tag, 'write_log_file');
		var logs = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory, 'logs');
		var _filename = 'CATCH_' + date.yyyymmdd() + '.log';
		logFile = Titanium.Filesystem.getFile(logs.nativePath, _filename);
		logFile.write("\n" + fullmsg, true); */

	}	

	//Public Members
	return {
		info : info,
		warn : warn,
		error : error
	};
})();

module.exports = Log;