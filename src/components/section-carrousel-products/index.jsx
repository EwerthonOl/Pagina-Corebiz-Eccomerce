import styles from './styles.module.css'

import { getSlides } from "../../utils/functions"

import AtomicSpinner from 'atomic-spinner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect, useState } from "react"
import { ProductCard } from "../product-card"

export const SectionProducts = () => {

  //ESTADOS PARA MUDAR PRODUTOS E QUANTIDADE DE SLIDES E LOADINGS
  const [products, setProducts] = useState([])
  const [slides, setSlides] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true)

      const getProducts = async () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        fetch("https://fakestoreapi.com/products", requestOptions)
          .then(response => response.json())
          .then(result => {
            setProducts(result)
            setIsLoading(false)
          })
          .catch(error => {
            console.log('error', error)
            setIsLoading(false)
          });
      }

      getProducts()
    }, []
  )

  //COMPONENTE
  return (
    <section className={styles.sectionCarrousel}>
      {/* CABEÇALHO */}
      <header className={styles.headerCarrousel} title="Produtos mais vendidos">
        <p className={styles.strongHeader}>Mais Vendidos</p>
        <hr className={styles.lineGrey} />
      </header>

      {isLoading ?
        /* COMPONENTE DE SLIDES DO REACT */
        <div className={styles.loading}><AtomicSpinner /></div>
        :
        /* /* SLIDES DE PRODUTOS */
        <article className={styles.divSwipper} title="Produtos e suas informações">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={slides}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets:true}}
            className={styles.swiperContainer}
            style={{
              "--swiper-navigation-color": "#F8475F",
              "--swiper-pagination-color": "#F8475F",
              "--swiper-navigation-size": "22px"
            }}
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
        </article>
        
      }
    </section>
  )
}
