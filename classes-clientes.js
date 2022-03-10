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

const novoCliente = new Cliente("Carlos", "28", "carlos@email.com",500)

novoCliente.exibirSaldo()

console.log(novoCliente)