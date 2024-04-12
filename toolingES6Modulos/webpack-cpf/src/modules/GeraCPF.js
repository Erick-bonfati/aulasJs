import ValidaCpf from './ValidaCpf' // Importando o validador de cpf

// Podemos usar o validador de CPF para gerar um CPF
export default class GeraCPF {
    rand(min= 100000000, max=999999999) { // Gerando numeros aleatorios de 1 a 9, o numero aleatorio do nosso gerador vai ser entre esses numeros...
        return String(Math.floor(Math.random() * (max - min) + min)); // retorna os numeros como string
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand(); // gera um cpf aleatorio com numeros aleatorios
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito); // pega o gerador de digito do outro módulo ValidCpf
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1); // adiciona o digito 1 + digito 2 descoberto
        const novoCpf = cpfSemDigito + digito1 + digito2; // Cria o cpf aleatorio com os digitos

        return this.formatado(novoCpf);
    }
}