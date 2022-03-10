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

let relatorio = ""

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)
