import {
  GET_CLIENTES,
  ADD_CLIENTE,
  UPDATED_CLIENTE,
  REMOVER_CLIENTE,
  SET_CLIENTE,
  SET_ORDENACAO,
  SET_PESQUISA
} from '../actions/types';

const getDate = () => new Date().getTime();

const genereteId = () => Math.floor(Math.random() * 100000 + 100000);

const prepararCliente = (cliente) => {
  const id = genereteId();
  const criadoEm = getDate();
  const atualizadoEm = getDate();
  return { ...cliente, id, criadoEm, atualizadoEm };
}

const data = [
    {
      id: 1, 
      nome: "João", 
      telefone: "3232-3232",
      email: "joao@gmail.com",
      cpf: "111.222.333-45",
      criadoEm: getDate(),
      atualizadoEm: getDate()
    }
];

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: prepararCliente(cliente) });

export const updateCliente = (id, cliente) =>  ({ type: UPDATED_CLIENTE, cliente: { id, ...cliente, atualizadoEm: getDate() } });

export const removerCliente = (id) => ({ type: REMOVER_CLIENTE, id });

// ACTIONS DE APOIO

export const setClienteParaAltereacao = (cliente) => ({ type: SET_CLIENTE, cliente });

export const setOrdenacao = (ev) => ({ type:  SET_ORDENACAO, ordenacao: ev.target.value })

export const setPesquisa = (ev) => ({ type:  SET_PESQUISA, pesquisa: ev.target.value })