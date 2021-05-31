import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import TodoApp from './Todo/TodoApp';
//import reportWebVitals from './reportWebVitals';
import store from './Store/store';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
