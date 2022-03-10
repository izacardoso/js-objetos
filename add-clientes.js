function cliente(nome,idade,email,saldo){
    this.nome = nome
    this.idade = idade
    this.email = email
    this.saldo = saldo
    this.deposito = function(valor){
        this.saldo += valor
    }
}

let novoCliente = new cliente('Maria', '21', 'maria@email.com',200)

console.log(novoCliente)