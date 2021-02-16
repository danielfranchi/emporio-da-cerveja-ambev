import {ArrayItemBeer, TypesBeer} from './types'

const initialStatePost: ArrayItemBeer  = {
  itensBerrs: []
}

function reducerItemBeer(state = initialStatePost, action: any) {

  switch(action.type){

    case TypesBeer.ITENS_BEER:
      return {
        itensBerrs: action.payload,
      }
  
    default: 
      return state
  }
      
}

export default reducerItemBeer