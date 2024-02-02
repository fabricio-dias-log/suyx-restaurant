import { useState } from 'react';
import hashtauranteImg from './assets/hashtaurante.webp';
import './App.css';
import  Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export default function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return (
    <div>
      <img src={hashtauranteImg} className="capa"></img>
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className='menu'>
        {paginasMenu[paginaSelecionada].map(item => 
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


