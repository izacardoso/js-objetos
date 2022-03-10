// Acessar um objeto com informação de um cliente e exibir essas informações no console.

const cliente = {
    nome: 'Lina',
    idade: 26,
    cidade: 'Rio de Janeiro'
}

const chaves = ['nome','idade','cidade']

//console.log(`O nome da cliente é ${cliente.nome}, ela tem ${cliente.idade} anos, e mora na cidade ${cliente.cidade}`)

//console.log(cliente[chaves[0]])

//console.log(cliente['idade'])

//chaves.forEach(info => console.log(cliente[info]))

cliente.fone = '9746545478'

delete cliente.fone

console.log(cliente)