import styles from "./styles.module.css" 

import bannerCell from '../../assets/banner-cell.svg'
import bannePc from "../../assets/banner.svg"

import { useState, useEffect } from "react"

export const CarrouselEcommerce = () => {
  const [imgSrc, setImgSrc] = useState(bannerCell);

  //USA A FUNÇAÕ DOS UTILS PARA DEFINIR O BANNER DA TELA INICIAL DE ACORDO COM A VIEW
  useEffect(() => {
    setImgSrc(window.innerWidth >= 520 ? bannePc : bannerCell);

    window.addEventListener("resize", () => 
      setImgSrc(window.innerWidth >= 520 ? bannePc : bannerCell));

    return window.removeEventListener("resize", () =>
      setImgSrc(window.innerWidth >= 520 ? bannePc : bannerCell)
    );
  }, []);

  return (
    <section className={styles.sectionCarrousel}>
      <img className={styles.imgCarrousel} src={imgSrc} alt="" />
    </section>
  )
}
