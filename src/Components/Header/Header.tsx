import React from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet'

import { useSelector } from 'react-redux'
import { QuantidadesBeers } from '../../store/ducks/carrinho/types'

import '../Header/Header.scss'
import Logo from '../../images/logo-img.svg'
import Logo1 from '../../images/logo.svg'
import { BiCartAlt } from "react-icons/bi";


const Header = () => {

  let valor: number = 0
  const total = useSelector((state: QuantidadesBeers ) => state.quantidade.carrinho)

  const {price} = useSelector((state: any) => state.itemBeer.itensBerrs)
  if(price !== undefined){
    const preco = price.replace('R$ ', '')
    valor = parseFloat(preco.replace(',', '.'))
  }


  const [produtos, setProduto] = React.useState<string[]>([])
  const token = localStorage.getItem("token")

  const headers = {
    'Authorization': `Bearer ${token}`
  }
  
  React.useEffect(() => {
    axios.get('http://localhost:4000/categories', {headers: headers})
     .then(resposta => setProduto(resposta.data))
  }, [])
  
  return (
    <div className='header'>
      <Helmet>
        <title>Produtos</title>
      </Helmet>

      <header className='menus'>
        <img src={Logo} alt='logo' className='img'/>
        <img src={Logo1} alt='logo' />

        <ul>
          {produtos.map((item, i) => (
            <li key={i}> {item} |</li>
          ))}
        </ul>

        <div>
          <BiCartAlt />
          {total * valor}
        </div>
      </header>
    </div>
  );
}

export default Header;
