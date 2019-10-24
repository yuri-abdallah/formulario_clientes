import { combineReducers } from 'redux';
import clientesReducers from './clientesReducers';

const rootReducer = combineReducers({
    clientes: clientesReducers
})

export default rootReducer;