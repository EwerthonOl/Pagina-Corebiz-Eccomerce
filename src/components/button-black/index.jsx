import styles from "./styles.module.css"

import { useContext } from "react"
import { CartContext } from "../../contexts/cart"

export const ButtonBlack = () => {
  const {quant, setQuant} = useContext(CartContext)

  //QUANTIDADE DE ITENS DO CARRINHO PARA ADICIONAR NO LOCALSTORAGE
  let quantItemCarrinho = null;

  //ADICIONAR +1 COMPRA AO CARRINHO, VERIFICANDO AS QUANTIDADE ANTERIOR NO LOCALSTORAGE
  function changeQuantItem(){
    if(localStorage.getItem("quantidadeItemCarinho") != null){
      quantItemCarrinho = Number(localStorage.getItem("quantidadeItemCarinho"))
    }

    quantItemCarrinho++

    localStorage.setItem("quantidadeItemCarinho", quantItemCarrinho.toString())
  }

  return (
    <button className={styles.buttonBlack} onClick={()=>
      {
        setQuant(quant+1)
        changeQuantItem()
      }
    }>
      COMPRAR
    </button>
  )
}
