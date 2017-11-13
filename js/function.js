function doEntrar(doc){
	if ((doc.getElementById("idUsuario").value === "admin") && (doc.getElementById("idSenha").value === "admin")) {
		location.href = "cadastroCliente.html";
	}
}

function doNovoUsuario() {
	location.href = "cadastroUsuario.html";
}