import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'


import reducerCarrinho from './ducks/carrinho/reduce'
import reducerItemBeer from './ducks/ItenBeer/reducer'

const createRootReducer = () => combineReducers({
  itemBeer: reducerItemBeer,
  quantidade: reducerCarrinho
})

const store = createStore(createRootReducer(), composeWithDevTools())


export { store }










