

//function onLoad() {
	var usuarioLogado = {};
	
	const URL_BASE = "http://54.233.167.116:9722/datasnap/rest/";
	const URL_LOGIN = URL_BASE + "Tsmusuario/acessosistema/";
	
	var getUsuarioLogado = function() {
		return usuarioLogado;
	}
	
	var setUsuarioLogado = function(usuario) {
		if (!usuario.isEmptyObject){
			usuarioLogado = JSON.parse(usuario).result[0][0];
		}
	}
	
	var getUrlLogin = function(usuario) {
		if (!usuario.isEmptyObject){
			return URL_LOGIN + usuario.USU_NOME + "/" + usuario.USU_SENHA;
		}
	}
//

function getUrlLogin(usuario) {
	if (!usuario.isEmptyObject){
		return URL_LOGIN + usuario.USU_NOME + "/" + usuario.USU_SENHA;
	}
}

function doEntrar(doc) {
	var usuario = {USU_NOME: doc.getElementById('idUsuario').value, USU_SENHA: doc.getElementById('idSenha').value};
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			setUsuarioLogado(this.responseText);
			console.log(usuarioLogado.USU_NOME);
		}
	};
	xhttp.open("GET", getUrlLogin(usuario), true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}


function doNovoUsuario() {
	location.href = "cadastroUsuario.html";
}