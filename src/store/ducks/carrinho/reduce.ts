import {ItemCarrinho} from './types'

const initialStatePost: ItemCarrinho  = {
  carrinho: 0
}

function reducerCarrinho(state = initialStatePost, action: any) {

    switch(action.type) {
      case 'ADD_CARRINHO':
        return {
          carrinho: state.carrinho + 1
        }
      
      case 'DECREASE_CARRINHO':
        return{
          carrinho: state.carrinho - 1
        }

      case 'ZERA_CARRINHO':
        return{
          carrinho: state.carrinho = 0
        }
      
      default: 
        return state
    }
}

export default reducerCarrinho



