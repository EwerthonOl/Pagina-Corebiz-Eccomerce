import styles from './styles.module.css'

import { getSlides } from "../../utils/functions"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect, useState } from "react"
import { ProductCard } from "../product-card"

export const SectionProducts = () => {

  //ESTADOS PARA MUDAR PRODUTOS E QUANTIDADE DE SLIDES
  const [products, setProducts] = useState([])
  const [slides, setSlides] = useState(2);

  //MUDAR QUANTIDADE DE SLIDES DE ACORDO COM O WIDTH DA TELA
  useEffect(() => {
    setSlides(getSlides(window.innerWidth));

    window.addEventListener("resize", () => 
      setSlides(getSlides(window.innerWidth)));

    return window.removeEventListener("resize", () =>
      setSlides(getSlides(window.innerWidth))
    );
  }, []);

  //FAZER A REQUISIÇÃO DOS PRODUTOS A SEREM LISTADOS
  useEffect( 
    () => {
      const getProducts = async () => {

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://fakestoreapi.com/products", requestOptions)
          .then(response => response.json())
          .then(result => setProducts(result))
          .catch(error => console.log('error', error));
      }
      
      getProducts()      
    }, []
  )

  //COMPONENTE
  return (
    <section className={styles.sectionCarrousel}>
      {/* CABEÇALHO */}
      <header className={styles.headerCarrousel}>
        <p className={styles.strongHeader}>Mais Vendidos</p>
        <hr className={styles.lineGrey} />
      </header>

      {/* SLIDES DE PRODUTOS */}
      <div className={styles.divSwipper}>
        {/* COMPONENTE DE SLIDES DO REACT */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={slides}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiperContainer}
        >
          {products.map(product => 
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <ProductCard  
              image={product.image} 
              title={product.title} 
              rating={product.rating} 
              price={product.price} 
              category={product.category} 
              description={product.description}
            />
          </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  )
}
