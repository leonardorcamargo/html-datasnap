var botaoHome = document.querySelector("#idBotaoHome");

botaoHome.addEventListener("click",function(){
    //evento de clique para home
});

var botaoCliente = document.querySelector("#idBotaoCliente");

botaoCliente.addEventListener("click",function(){
    carregaControleCliente();
});

function carregaControleCliente(){
    document.open("view/cliente.html");
}

var botaoTeste = document.querySelector("#idBotaoTeste");

botaoTeste.addEventListener("click",function(){
    excluiConteudo();
});

function excluiConteudo(){
    var main = document.querySelector("#idMainHome");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}
