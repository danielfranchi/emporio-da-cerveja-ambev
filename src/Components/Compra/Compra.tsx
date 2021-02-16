import React from 'react'
import { useSelector } from 'react-redux'
import { QuantidadesBeers } from '../../store/ducks/carrinho/types'
import { useDispatch } from 'react-redux'



const Compra = () => {

  const total = useSelector((state: QuantidadesBeers) => state.quantidade.carrinho)
  const dispatch = useDispatch()


  return (
    <div>

      <button onClick={() => dispatch({type: 'ADD_CARRINHO'})}>+</button>
        {' '}
          {total}
        {' '}
      <button onClick={() => dispatch({type: 'DECREASE_CARRINHO'})}>-</button>
    </div>
  )
}

export default Compra


