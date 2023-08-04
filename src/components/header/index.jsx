import styles from "./styles.module.css" 

import lupaIcon from '../../assets/lupa-icon.svg'
import menuIcon from '../../assets/menu-icon.svg'
import logoCorebiz from '../../assets/site-logo-corebiz-preto-cinza.svg'
import cartIcon from '../../assets/shopping-cart-icon.svg'

export const Header = () => {
  
  return (
    <header>
      <div className={styles.headerInner}>
        <img className={styles.menuIcon} src={menuIcon} alt="Menu do site" />

        <img className={styles.logoCorebiz} src={logoCorebiz} alt="Logo Corebiz" />

        <img className={styles.cartIcon} src={cartIcon} alt="Carrinho de compras" />
      </div>

      <form className={styles.formHeader}>
        <input type="text" placeholder="O que está procurando?" className={styles.inputForm}/>
        <img className={styles.lupaIcon} src={ lupaIcon } alt="Lupa de pesquisa" />
      </form>
    </header>
  )

}
