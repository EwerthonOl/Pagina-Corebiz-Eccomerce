import { Header } from "./components/header"
import { CarrouselEcommerce } from "./components/carrousel-ecommerce"
import { SectionProducts } from "./components/section-carrousel-products"
import { FormNews } from "./components/imput-form"
import { Footer } from "./components/footer"

export const App = () => {

  return (
    <>
      <Header />
      <CarrouselEcommerce/>
      <SectionProducts />
      <FormNews/>
      <Footer/>
    </>
  )
}
