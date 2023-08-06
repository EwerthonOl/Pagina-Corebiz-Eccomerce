import styles from './styles.module.css'

import ReactStars from "react-rating-stars-component";

import { ButtonBlack } from '../button-black';

export const ProductCard = ({image, title, rating, price, category, description}) => {

  //COMPONENTE
  return (
    //CARD DE CADA PRODUTO
    <div className={styles.divCard}>
      {/* IMAGEM DO PRODUTO E NOME */}
      <img src={image} alt={description} title={title}/>
      
      <div className={styles.divDescriptProdc}>
        <p className={styles.productNameP} title={title}>{title.slice(0,20)}</p>
        <ReactStars 
          count={5}
          value={rating.rate}
          isHalf={true}
          activeColor="#F8475F" 
          a11y={false}
          edit={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
        />

        <strong>por R$ {price}</strong>
        <p className={styles.installmentsP}>{category}</p>

        <ButtonBlack/>
      </div>
    </div>
  )

}
