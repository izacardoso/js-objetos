function cliente(nome,idade,email,saldo){
    this.nome = nome
    this.idade = idade
    this.email = email
    this.saldo = saldo
    this.deposito = function(valor){
        this.saldo += valor
    }
}

function clientePoup(nome, idade ,email,saldo,saldoPoup){
    cliente.call(this,nome,idade,email,saldo)
    this.saldoPoup = saldoPoup
}

const novoCliente = new clientePoup('Lando', '22', 'lando@email.com',100,200)

console.log(novoCliente)

clientePoup.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

novoCliente.depositarPoup(30);

console.log(`O novo valor da sua poupança é de ${novoCliente.saldoPoup}.`)