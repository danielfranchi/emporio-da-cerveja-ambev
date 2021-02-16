export enum TypesBeer {
  ITENS_BEER = 'ITENS_BEER'
}

export interface ItemBeer {
  id: number
  image: string
  description: string
  title: string
  price: string
}

export interface ArrayItemBeer {
  itensBerrs: ItemBeer[]
}

export interface Beer {
  itemBeer: ArrayItemBeer
}