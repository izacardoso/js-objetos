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

console.log(cliente.saldo);
cliente.deposito(50)
console.log(cliente.saldo);
