// import { useState } from 'react';
import hashtauranteImg from './assets/hashtaurante.webp';
import './App.css';
import  Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export default function App() {
  return (
    <div>
      <img src={hashtauranteImg} className="capa"></img>
      <Navegacao />
      <div className='menu'>
        {pratosPrincipais.map(item => 
          <ItemCardapio 
          nome={item.nome} 
          descricao={item.descricao} 
          preco={item.preco} 
          imagem={item.imagem}
          />
        )}
      </div>
    </div>
  )
}


