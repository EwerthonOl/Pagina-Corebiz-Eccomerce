import styles from "./styles.module.css"

import { useContext } from "react"
import { CartContext } from "../../contexts/cart"

export const ButtonBlack = () => {
  const {quant, setQuant} = useContext(CartContext)

  return (
    <button className={styles.buttonBlack} onClick={()=>setQuant(quant+1)}>
      COMPRAR
    </button>
  )
}
