class AbrirConta {
    constructor(name, cpf, endereco) {
        this.name = name
        this.cpf = cpf
        this.endereco = endereco
        this.tipoDeConta = "Conta Corrente"
        this.saldo = 0
        this.saldoDevedor = 0
    }
    
    emprestimoBancario (emprestimo) {

        this.saldo += emprestimo 
        this.saldoDevedor += emprestimo + 100
        
    }
}


 let user = new AbrirConta("Fábio Henrique", "108.133.316-25", "Rua deadsadhsjahdjas")
 console.log(user)
user.emprestimoBancario(5000)
console.log(user)