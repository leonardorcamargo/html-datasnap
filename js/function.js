// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function doEntrar(doc) {
  // This is a sample server that supports CORS.
  var url = 'http://54.233.167.116:9722/datasnap/rest/Tsmusuario/acessosistema/'+doc.getElementById('idUsuario').value+
		  	'/'+doc.getElementById('idSenha').value;
  console.log(url);

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
	
  // Response handlers.
  xhr.onload = function() {
    alert(xhr.responseText);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  
  xhr.setRequestHeader("Access-Control-Allow-Origin","*"); 	
  xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
  xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  xhr.setRequestHeader("Access-Control-Allow-Credentials", true);
  xhr.send();
}

//function doEntrar(doc) {
//	var myObj;
////	$.get( "http://54.233.167.116:9722/datasnap/rest/Tsmusuario/acessosistema/"+doc.getElementById('idUsuario').value+
////		  "/"+doc.getElementById('idSenha').value, function(data) {
////         console.log(data);
////    });
//	
//	var xmlhttp = new XMLHttpRequest();
//	xmlhttp.onreadystatechange = function() {
//		console.log("funcionou...");
//		console.log(this.responseText);
//		if (this.readyState == 4 && this.status == 200) {
//			console.log("Trouxe algo...");
////			myObj = JSON.parse(this.responseText);
////			console.log(data);
//		}
//	};
//	xmlhttp.open("GET", "http://54.233.167.116:9722/datasnap/rest/Tsmusuario/GetUsuarios", true);
//	xmlhttp.send();		
//	
//	
////	xmlhttp.open("GET", "http://54.233.167.116:9722/datasnap/rest/Tsmusuario/acessosistema/"+doc.getElementById('idUsuario').value+
////		  "/"+doc.getElementById('idSenha').value, true);
////	xmlhttp.send();	
//	
//}

function doNovoUsuario() {
	location.href = "cadastroUsuario.html";
}
