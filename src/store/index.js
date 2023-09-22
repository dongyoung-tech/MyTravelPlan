import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const placeInfo = []

function reducer(state=placeInfo){
    return state;
}
//cosnt 꺼내온거 = useSelector((state) => state);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
