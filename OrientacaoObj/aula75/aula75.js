// Criar um validador de cpf com classes


// Pegar numero cpf
// Tirar os pontos e traços do cpf
// Tirar os últimos dois digitos do cpf
// Verificar se é o tipo string
// Verificar se tem 11 caracteres
// Verificar se os 11 caracteres são numeros repetidos
// Transformar a string num array
// Fazer a validação do governo
// Comparar o cpf orginal com o que geramos


class ValidaCpf {
    constructor(cpfEnviado) {

        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
    
            get: function() {
                return cpfEnviado.replace(/\D+/g, '');
            }
        });
    }

    valida() {
    if(typeof this.cpfLimpo === 'undefined' ) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfCortado =  this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfCortado);
    const digito2 = this.criaDigito(cpfCortado + digito1);
    const novoCpf = cpfCortado + digito1 + digito2;

    return novoCpf === this.cpfLimpo;

    }

    criaDigito(cpfCortado) {

        const cpfArray = Array.from(cpfCortado);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac+= (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);

        return digito > 9 ? '0' : String(digito);

    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo;
    };

}


const cpf = new ValidaCpf('705.484.450-52');

if(cpf.valida() === true) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}


