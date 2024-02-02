// import { useState } from 'react';
import hashtauranteImg from './assets/hashtaurante.webp';
import './App.css';
import  Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';

export default function App() {
  

  return (
    <div>
      <img src={hashtauranteImg} className="capa"></img>
      <Navegacao />
      <div className='menu'>
        <ItemCardapio />
        <ItemCardapio />
        <ItemCardapio />
        <ItemCardapio />
      </div>
    </div>
  )
}


