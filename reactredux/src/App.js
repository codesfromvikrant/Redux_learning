import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cakecontainer from './components/Cakecontainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakecontainer />
      </div>
    </Provider>
  );
}

export default App;
