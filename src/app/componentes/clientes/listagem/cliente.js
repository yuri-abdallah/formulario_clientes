import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';


class Cliente extends React.Component {
    
    state = {
      iniciouExclusao: false
    }

    excluirCliente = () => {
        const { iniciouExclusao } = this.state;
        if(!iniciouExclusao) return this.setState({ iniciouExclusao: true});
        this.props.removerCliente(this.props.cliente.id);
    }

    alterarCliente = () => {
        this.props.setClienteParaAltereacao(this.props.cliente);
    }

    render() {
        const {cliente} = this.props;
        const { iniciouExclusao } = this.state;
        return (
          <tr>
            <td>{cliente.nome}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.email}</td>
            <td>{cliente.cpf}</td>
            <td
                onClick={this.alterarCliente}
                className="botao botao-amarelo" >
                { "Alterar" }
            </td>
            <td
                onClick={this.excluirCliente}
                className="botao botao-vermelho" >
                { iniciouExclusao ? "Certeza?" : "Excluir" }
            </td>
         </tr>
        );
    }
}

export default connect(null, actions)(Cliente);