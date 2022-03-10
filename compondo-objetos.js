const cliente = {
    nome: 'Lina',
    idade: 26,
    cidade: 'Rio de Janeiro'
}

cliente.dependente={
    nome: 'Pedro',
    idade: 7,
}

console.log(cliente)

cliente.dependente.nome='Pedro Silva'

console.log(cliente)