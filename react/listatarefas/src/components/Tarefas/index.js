import React from "react";
import PropTypes from "prop-types";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Tarefas.css";

export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <ul className="tarefas">
      {/*Nosso método map, itera sobre cada tarefa e cada indice, passando um por um */}
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {/*Nossa key, serve para atribuir uma chave para cada elemente(indice) que estamos passando */}
          {tarefa}
          <span>
            {/*No onClick, também executa um método quando clicamos nele, aqui passamos uma
                  arrow function para receber nosso método e capturar o index do que estamos clicando */}
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired, // passando o propType da função, setando que é uma função e
  // colocando como obrigatorio...
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
