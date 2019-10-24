import React from 'react';

import Ordenacao from './ordenacao';
import Pesquisa from './pesquisa';
import Formulario from '../formulario';
import ListaCliente from './lista';


const Opcoes = () => (
  <div className="Opcoes flex horizonral">
    <div>
        <Pesquisa />
    </div>
    <div className="Ordenacao">
        <Ordenacao />
    </div>
  </div>
)

export default class Listagem extends React.Component {
  render() {
    return (
        <div className='Listagem'>
            <div className="Header">
              <h2>Lista de Clientes</h2>
            </div>
            <hr />
            <Formulario />
            <br />
            <Opcoes />
            <br />
            <hr />
            <ListaCliente />
        </div>
    )
  }
}