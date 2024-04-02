import React from "react";
import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa"; // Importando um icone de uma biblioteca do react

import "./Form.css";

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      {/*Neste input, onChange, nós capturarmos tudo que é digitado e para para uma novaTarefa*/}
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Precisamos colocar um valor padrão para tudo que não for requirido, mas nesse caso não vamos utilizar
// Form.defaultProps = {
//   novaTarefa: "Valor padrão",
// };

//Aqui estamos passando para esta função um propType para cada parametro, estes paramatros estão vindo
// do nosso main, que está sendo importados para cá...
Form.propTypes = {
  handleChange: PropTypes.func.isRequired, // passando o propType da função, setando que é uma função e
  // colocando como obrigatorio...
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
