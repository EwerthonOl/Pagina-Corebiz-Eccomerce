import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';

export const CartContext = createContext({})

//CONTEXTO REACT PARA USAR  O CLICK DE UM COMPONENTE EM OUTRO DIFERENTE 
export const CartProvider = ({ children }) => {
  const [quant, setQuant] = useState(0)

  //VERIFICAR SE JÁ TEM ITENS NO CARRINHO
  useEffect(() => {
    let quantItemCarrinho = null;

    localStorage.getItem("quantidadeItemCarinho") != null ? quantItemCarrinho = localStorage.getItem("quantidadeItemCarinho") : ""

    quantItemCarrinho != null && quant == 0 ? setQuant(Number(quantItemCarrinho)) : ""
  }, [quant])
  
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired
  }

  return (
    <CartContext.Provider value={{ quant, setQuant }}>
      {children}
    </CartContext.Provider>
  )
}

