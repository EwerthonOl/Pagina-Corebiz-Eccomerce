import { createContext, useState } from 'react'

export const CartContext = createContext({})

//CONTEXTO REACT PARA USAR  O CLICK DE UM COMPONENTE EM OUTRO DIFERENTE 
export const CartProvider = ({ children }) => {
  const [quant, setQuant] = useState(0)

  return (
    <CartContext.Provider value={{ quant, setQuant }}>
      {children}
    </CartContext.Provider>
  )
}
