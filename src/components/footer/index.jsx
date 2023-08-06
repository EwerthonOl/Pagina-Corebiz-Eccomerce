import styles from "./styles.module.css" 

import logoCorebizBranco from '../../assets/logo-corebiz-branco.svg'
import vtexIcon from '../../assets/vtex-icon.svg'
import mailIcon from '../../assets/mail-icon.svg'
import foneIcon from '../../assets/fone-icon.svg'

import { ButtonWhite } from "../button-white"

export const Footer = () => {

  //COMPONENTE
  return (
    <footer>
      {/* HEADER LOCALIZAÇÃO */}
      <div className={styles.divLocalHr}>
        <strong className={styles.strongLocal}>Localização</strong>
      
        <hr className={styles.lineWhite} />

        {/* TEXTO DE ENDEREÇO */}
        <div className={styles.divAdress}>
          <p className={styles.pAdress}>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p className={styles.pAdress}>Alphavile SP</p>
          <p className={styles.pAdress}>brasil@corebiz.ag</p>
          <p className={styles.pAdress}>+55 11 3090 1039</p>
        </div>
      </div>

      {/* //BOTOES BRANCOS */}
      <div className={styles.divButtonsWhite}>
        <ButtonWhite className={styles.buttonWhite} icon={mailIcon} text="ENTRE EM CONTATO" textAlternative="Icone de email"/>
        <ButtonWhite icon={foneIcon} text="FALE COM O NOSSO CONSULTOR ONLINE" textAlternative="Icone de fone"/>
      </div>
 
      {/* LOGOS FOOTER */}
      <div className={styles.divImgsCoreVtex}>
        <div className={styles.logoCorebiz}>
          <p className={styles.pCreated}>Created by</p>
          <img className={styles.imgCorebiz} src={logoCorebizBranco} alt="Logo da empresa Corebiz" />
        </div>

        <img src={vtexIcon} alt="Logo da empresa Vtex" />
      </div>
    </footer>
  )
}
