// Agora vamos configurar o axios, que serve para fazer requisições diretamente para o bd

import axios from 'axios';

export default axios.create({
  baseURL: 'http://35.247.194.53:81',
});

/// APENAS COMO BASE DE CONHECIMENTO

// Importando o axios, lembrando que o axios ele retorna promisses, pois ele é assincrono
// import axios from '../../services/axios';

// Agora vamos passar uma função para quando um componente é montado
// Ele só vai executar uma vez, assim que o componente for montado
// Primeiro passamos um parametro vazio, e depois um array de dependencias do que vai ser executado
// React.useEffect(() => {
//   // criando uma função assincrona para referenciar o axios
//   async function getData() {
//     const response = await axios.get('/alunos'); // método get para pegar as informações de alunos
//     const { data } = response; // fazemos assim para pegar somente os dados dos alunos
//     console.log(data);
//   }

//   getData();
// }, []);
