import styles from "./styles.module.css" 

import bannerCell from '../../assets/banner-cell.svg'

export const CarrouselEcommerce = () => {
  return (
    <section className={styles.sectionCarrousel}>
      <img className={styles.imgCarrousel} src={bannerCell} alt="" />
    </section>
  )
}
