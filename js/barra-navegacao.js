var botaoHome = document.querySelector("#idBotaoHome");

botaoHome.addEventListener("click",function(){
    //evento de clique para home
});

var botaoCliente = document.querySelector("#idBotaoCliente");

botaoCliente.addEventListener("click",function(){
    carregaControleCliente();
});

function carregaControleCliente(){
    var main = document.querySelector("#idMainHome");
    main.setAttribute("w3-include-html","view/cliente.html");
    w3.includeHTML();
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
