import styles from './styles.module.css'
import PropTypes from 'prop-types';

import ReactStars from "react-rating-stars-component";

import { ButtonBlack } from '../button-black';

export const ProductCard = ({ image, title, rating, price, category, description }) => {

  ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  //COMPONENTE
  return (
    //CARD DE CADA PRODUTO
    <section className={styles.divCard}>
      {/* IMAGEM DO PRODUTO E NOME */}
      <img src={image} alt={description} title={title} />

      <article className={styles.divDescriptProdc}>
        <p className={styles.productNameP} title={title}>{title.slice(0, 20)}</p>
        <ReactStars
          count={5}
          value={rating.rate}
          isHalf={true}
          activeColor="#F8475F"
          a11y={false}
          edit={false}
        />

        <strong>por R$ {price.toLocaleString('PT')}</strong>
        <p className={styles.installmentsP}>{category}</p>

        <ButtonBlack />
      </article>
    </section>
  )

}
