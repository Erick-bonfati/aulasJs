import React, { Component } from "react";

//Form
import Form from "./Form";

import "./Main.css";

// Tarefas
import Tarefas from "./Tarefas";

//Componentes que são funções normais, eles retornam um 'jsx', e os componentes que são 'classes' eles precisam do método 'render'
//para renderizar alguma coisa na tela
export default class Main extends Component {
  state = {
    // Todas as chaves que estiverem aqui dentro, são o estado do nosso componente, e tudo que mudar dentro do state, vai refletir no 'render'
    novaTarefa: "",
    tarefas: [],
    index: -1, // se este indice for diferente de -1, quer dizer que estamos editando alguma coisa do nosso array
  };

  // O componente didMount, salva uma vez que o componente for montado
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")); // salvar o item tarefas, do nosso localStorage

    if (!tarefas) return; // checamos se existem tarefas

    this.setState({ tarefas }); // e setamos um estado de tarefas para salvar os componentes
  }

  // Este componente pode ser utilizado para salvar as informações no localStorage da linguagem
  // Pegamos as propriedades anteriores e o estado anterior
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return; // Se as tarefas forem iguais ao estado anterior, não fazemos nada

    // E para salvar nossas tarefas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  //A cada letra digitada no input, o nosso método vai ser chamado e ele vai
  //precisar atualizar nossa variavel de 'state', e fazemos isso com uma arrowFunction
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value, // aqui estamos capturando tudo que é digitado no input
    });
  };

  // Funcão para editar algo da nossa lista de tarefas
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index], // Aqui nós pegamos o indice da tafera já criada e passamos como se fosse editar, para a
      //novaTarefa, que o valor no input
    });
  };

  // Funcão para excluir algo da nossa lista de tarefas
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1); // Para deletar, nós pegamos do indice que estamos clicando, remova 1 indice

    // E aqui nós copiamos nossas novas tarefas para as tarefas
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  //Previnindo evento padrão de envio de formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // esse 'trim' elimina os espaços do começo e do final

    //Se o indice das tarefas for igual a '-1' quer dizer dizer que ele existe
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    //Se passar de cima, vamos criar novas tarefas copiando as tarefas antigas
    const novasTarefas = [...tarefas];

    // Aqui vamos dizer como, se o indice for igual a -1, quer dizer que estamos criando alguma coisa, e contrario disso
    // quer dizer que estou editando alguma coisa
    if (index === -1) {
      //Aqui setamos um novo estado, copiando as novas tarefas para as tarefas, e depois passamos a nova tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], // assim toda vez q enviar o formulario ele vai criar uma
        // nova tarefa, porem se recarregar a página as tarefas criadas vão sumir
        novaTarefa: "", // Depois de adicionar nossa nova tarefa, ele vai limpar o input
      });
    } else {
      // Ai aqui passamos uma condição que o indice das novasTafefas vai ter o indice do que eu estou editando, que é uma nova
      //tarefa
      novasTarefas[index] = novaTarefa;

      // e aqui setamos que nossa tarefa vai ser igual a cópia das novas tarefas, e setando que estamos editando alguma coisa
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  };

  // Esse método render é o método que que referenciamos no nosso index.js, para ser o html principal...
  render() {
    const { novaTarefa, tarefas } = this.state; // agora tudo que em qualquer lugar que colocarmos esta
    // variavel, ele vai escrever tudo que a gente digitar...
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
