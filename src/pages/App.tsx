import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
//transformando o style em modulo 
function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
