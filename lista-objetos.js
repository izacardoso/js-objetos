const cliente = {
    nome: 'Lina',
    idade: 26,
    cidade: 'Rio de Janeiro',
    dependentes:[{
        nome: 'Pedro Silva',
        parentesco: 'filho',
        idade:7,
        dataNasc: '20/03/2014'
    }]
}

cliente.dependentes.push({
    nome: 'João Silva',
    parentesco: 'filho',
    idade: 10,
    dataNasc:13/04/2012
})

const filhoMaisNovo = cliente.dependentes.filter(dependente=>dependente.dataNasc==='20/03/2014')

console.log(filhoMaisNovo[0].nome)
console.log(filhoMaisNovo)