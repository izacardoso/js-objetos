const cliente = {
    nome: 'Lina',
    idade: 26,
    cidade: 'Rio de Janeiro',
    dependentes:[
        {
            nome: 'Pedro Silva',
            parentesco: 'filho',
            idade:7,
            dataNasc: '20/03/2014'
        },
        {
            nome: 'João Silva',
            parentesco: 'filho',
            idade: 10,
            dataNasc:13/04/2012
        }
    ],
    saldo:100,
    deposito: function(valor){
        this.saldo+=valor
    }
}

function ofereceSeguro(obj){
    let propCliente = Object.keys(obj);
    if (propCliente.includes("dependentes")){
        console.log(`Proposta seguro de vida para ${obj.nome}`)
    }
}

ofereceSeguro(cliente)

//console.log(Object.values(cliente))

console.log(Object.entries(cliente))