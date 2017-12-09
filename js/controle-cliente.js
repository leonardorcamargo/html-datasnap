function buscarClientes(){    
    var clientes = [
        {
            razaosocial:"Razão social 1",
            nomefantasia:"Nome fantasia 1",
            endereco:"Endereço 1",
            cidade:"Avaré",
            bairro:"Centro",
            estado:"SP",
            contato:"Luciano"
        },
        {
            razaosocial:"Razão Social 2",
            nomefantasia:"Nome fantasia 2",
            endereco:"Endereço 2",
            bairro:"Centro",
            cidade:"São Paulo",            
            estado:"SP",
            contato:"Rafael"
        },
        {
            razaosocial:"Razão Social 3",
            nomefantasia:"Nome Fantasia 3",
            endereco:"Endereço 4",
            bairro:"Centro",
            cidade:"Fartura",
            estado:"SP",
            contato:"Willians"
        },
        {
            razaosocial:"Razão Social 4",
            nomefantasia:"Nome Fantasia 4",
            endereco:"Endereço 5",
            bairro:"Centro",
            cidade:"Carlópolis",
            estado:"PR",
            contato:"Gustavo"
        }
    ];

    carregarTabela(clientes);
    console.log("Passou pelo buscarClientes");
}

function carregarTabela(clientes){
    var tabela = document.querySelector("#idTabelaClientes");
    console.log(tabela)
    var tbody = tabela.querySelector("tbody");
    console.log(tbody)
    clientes.forEach(function(cliente) {
        tbody.appendChild(montaTr(cliente));
    });
}

function montaTr(cliente){
    var tr = document.createElement("tr");
    tr.appendChild(montaTd(cliente.razaosocial));
    tr.appendChild(montaTd(cliente.nomefantasia));
    tr.appendChild(montaTd(cliente.endereco));
    tr.appendChild(montaTd(cliente.cidade));
    tr.appendChild(montaTd(cliente.bairro));
    tr.appendChild(montaTd(cliente.estado));
    tr.appendChild(montaTd(cliente.contato));
    return tr;
}


function montaTd(value){
    var td = document.createElement("td");
    td.textContent = value;
    return td;
}