// Polimorfismo = é uma maneira de fazer métodos se comportarem de maneiras diferentes

// Subclasses - são filhas de uma classe mãe ou uma classe pai

// Classe = Função construtora



// Na orientação a objetos isso seria uma SuperClass, e esse superclasse iria criar a conta, ser a base de tudo
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// E agora precisar de métodos genéricos, toda conta tem opções de sacar, depositar, ver saldo...

// Agora vamos mexer no prototype dessa função construtora para criar alguns métodos, como sacar, depositar....

// Este valor vai referenciar quanto vamos sacar ou depositar, precisamos ter algum valor para realizar a função
Conta.prototype.sacar = function(valor) {

    // se o saldo for menor que o valor que quero sacar...
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    // saldo atual menos o valor que vou sacar
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    // saldo atuala mais o valor que vou depositar
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(11, 22, 100)

// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(121);
// conta1.sacar(10);

// Agora vamos especializar nossa superclasse

// Vamos fazer o método sacar dar um limite para uma certa conta

//Conta corrente
function CC(agencia, conta, saldo, limite) {
    
    //estamos linkando nossa outra função construtora pegando alguns dados dela
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype) // criando um objeto com base no _proto_ da função construtora 'Conta'
CC.prototype.constructor = CC // Fazendo a função contrutora do 'Conta corrente' voltar a herdar ela mesma


CC.prototype.sacar = function(valor) {

    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};


const cc = new CC(11, 22, 0, 100);

cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

// Em resumo nós rescrevemos o método sacar na nossa função filha que é 'ContaCorrente'

//Conta salario
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const cp = new CP(12, 33, 0);

cp.depositar(10);
cp.sacar(110); // aqui ele já não deixa sacar mais que o saldo que você tem, mas se tentar sacar exatamente o saldo que tem no momento ai vai dar
cp.sacar(1);