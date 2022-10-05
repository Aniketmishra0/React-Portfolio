import React from 'react';
import  {createRoot}  from 'react-dom/client';
// import  ReactDOM  from 'react-dom';
import App from './App'
import './index.css'
  

// const root=ReactDOM.createRoot(document.getElementById('root'))
// ReactDOM.render(<App/>, document.querySelector("#root"));

createRoot(document.getElementById('root')).render (
    <React.StrictMode>

        <App />
    </React.StrictMode>
    
);
