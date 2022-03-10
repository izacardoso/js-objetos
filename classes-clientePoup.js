class Cliente{
    constructor(nome, idade, email, saldo){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoup extends Cliente{
    constructor(nome, idade,email, saldo, saldoPoup){
        super(nome,idade,email,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const novoCliente = new ClientePoup ("George","23", "george@email.com", 200, 100)

console.log(novoCliente)

novoCliente.depositar(50)
novoCliente.depositarPoup(50)

console.log(novoCliente)
