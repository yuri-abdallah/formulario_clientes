import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Aplicacao from './componentes/aplicacao';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
              <Aplicacao />
        </div>
    </Provider>
  );
}

export default App;
