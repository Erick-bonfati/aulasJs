
// let cpfLimpo = cpf.replace(/\D+/g, '');

// cpfArray = Array.from(cpfLimpo);

// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));


//Função para definir as propriedades do CPF enviado
function ValidaCpf(cpfEnviado) {
    //definindo a propriedade do cpf
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,

        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

// Valido se o CPF é valido ou não
ValidaCpf.prototype.valida = function() {

    //Primeiro estamos validando se a pessoa realmente enviou um CPF
    if(typeof this.cpfLimpo === 'undefined' ) return false;

    // Se o tamanho do cpf for diferente de 11 retorna falso também
    if(this.cpfLimpo.length !== 11) return false;

    //se os numeros digitados forem uma sequencia ele vai retornar falso, ex: 111.111.111-11
    if(this.isSequencia()) return false;

    //corta os dois ultimos numeros
    const cpfParcial =  this.cpfLimpo.slice(0, -2);
    
    // pega o digito1
    const digito1 = this.criaDigito(cpfParcial);
    //pega o digito2
    const digito2 = this.criaDigito(cpfParcial + digito1);

    // faz a junção do cpf com os digitos descobertos
    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

// Prototype para fazer a conta do cpf, aqui colocamos como cpfParcial para fazer a conta tanto do primeiro digito quanto do segundo digito
ValidaCpf.prototype.criaDigito = function(cpfParcial) {

    //Transforma o cpf num array
    const cpfArray = Array.from(cpfParcial);
    
    //Para fazer o contador regressivo dos digitos
    let regressivo = cpfArray.length + 1;
    
    // a cada laço ele faz a conta do regressivo e tira um numero do regressivo
    const total = cpfArray.reduce((ac, val) => {
        
        // a cada laço ele realiza essa conta no acumulador, que é o regressivo vezes o valor convertido para numero
        ac+= (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    
    return digito > 9 ? '0' : String(digito);

};

//Se o primeiro digito for repetido 11 vezes, vai retornar verdadeiro.
ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) //  retorna o primeiro numero do cpf e repete ele pelo tamanho da contagem do cpf
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCpf('705.484.450-52');

if(cpf.valida() === true) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}
