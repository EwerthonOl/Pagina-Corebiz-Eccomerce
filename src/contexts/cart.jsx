import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

//CONTEXTO REACT PARA USAR  O CLICK DE UM COMPONENTE EM OUTRO DIFERENTE 
export const CartProvider = ({ children }) => {
  const [quant, setQuant] = useState(0)

  //VERIFICAR SE JÁ TEM ITENS NO CARRINHO
  useEffect(() => {
    let quantItemCarrinho = null;

    localStorage.getItem("quantidadeItemCarinho") != null ? quantItemCarrinho = localStorage.getItem("quantidadeItemCarinho") : ""

    console.log(quantItemCarrinho)

    quantItemCarrinho != null && quant == 0 ? setQuant(Number(quantItemCarrinho)) : ""
  })

  return (
    <CartContext.Provider value={{ quant, setQuant }}>
      {children}
    </CartContext.Provider>
  )
}
