import React from 'react'
import axios from 'axios'

import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { useDispatch, useSelector}  from 'react-redux'
import { itensBeer } from '../../store/ducks/ItenBeer/action'
import { Redirect } from 'react-router-dom'

import Header from '../../Components/Header/Header'
import Compra from '../Compra/Compra'
import '../../Components/Carrinho/Carrinho.scss'

import { AiOutlineArrowRight } from "react-icons/ai";


const Carrinhos = () => {

  const [concluir, setConcluir] = React.useState<Boolean>(false)

  const concluido = () => {
    setConcluir(true)
    dispatch({type: 'ZERA_CARRINHO'})
  }

  const [voltar, setVoltar] = React.useState<Boolean>(false)

  const home = () => {
    setVoltar(true)
    dispatch({type: 'ZERA_CARRINHO'})
    
  }


  const dispatch = useDispatch()
  const { title, price, description, image } = useSelector((state: any) => state.itemBeer.itensBerrs)

  const params = useParams<any>()
  const token = localStorage.getItem("token")

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  React.useEffect(() => {
    axios.get(`http://localhost:4000/beers/${params.id}`, {headers: headers} )
     .then(resposta => dispatch(itensBeer(resposta.data)))
  }, [])

  
  return (
    <div className='carrinho'>
      <Helmet>
        <title>Comprar</title>
      </Helmet>

      <Provider store={store}>
        <Header />
      </Provider>

      <div>
        <button onClick={home}><strong>Voltar</strong></button>
      </div>

      <div className='item'>
        
        {
          <div>
            <div>
              <strong>Meu Carrinho </strong>
              <button onClick={concluido}> <AiOutlineArrowRight /> </button>
              <hr/>
            </div>
            <img src={image} alt={title}/>
            <h3>{description}</h3>
            <span>{title}</span>
            <small>{price}</small>
            </div>
        }
        
        <Provider store={store}>
          <Compra />
        </Provider>

        { 
          voltar ?
          <Redirect to="/home" />
          :
          null
        }

        {      
          concluir ?
          <h1>Seu pedido foi finalizado</h1>
          :
          null
        }
      </div>
    </div>
  );
}

export default Carrinhos;