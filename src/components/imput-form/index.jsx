import styles from "./styles.module.css"

import { useState } from "react"

export const FormNews = () => {

  //ARMAZENAMENTO DO VALOR DOS INPUTS NOME E EMAIL
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [viewForm, setviewForm] = useState(true)

  //METODO PAR ENVIO AO CLICAR NO BOTAO PARA CADASTRAR NOME E EMAIL
  const onSubmit = (e) => {
    e.preventDefault();

    const objNameEmail = {
      name: name,
      email: email
    }

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(objNameEmail),
      redirect: 'follow'
    };

    fetch("https://fakestoreapi.com/users", requestOptions)
      .then(response => response.text())
      .then(result => setviewForm(!result))
      .catch(error => console.log('Erro ao cadastrar usuário: ', error));
  }

  //COMPONENTE
  return (
    <section className={styles.sectionNews}>
      {/* RENDERIZAR A DIV DE FORMULARIO OU A DIV DE CADASTRAR NOVO */}
      {viewForm === true ?
        // FORM
        <div className={styles.divViewForm}>
          {/* //CABEÇALHO */}
          <strong className={styles.strongNews}>Participe de nossas news com promoções e  novidades!</strong>

          {/* FORMULARIO PARA ENVIO */}
          <form className={styles.formNews} onSubmit={onSubmit} method="POST" aria-description="">

            {/* NOME */}
            <input name="Nome do usuário" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Digite seu nome" className={styles.inputName} required />

            {/* EMAIL */}
            <input name="Email do usuário" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Digite seu email" className={styles.inputEmail} required />

            <button className={styles.buttonFormNews} type="submit">Eu quero!</button>
          </form>
        </div>
        : 
        // NOVO
        <div className={styles.divEnvio}>
        <strong className={styles.strongEnvio}>Seu e-mail foi cadastrado com sucesso!</strong>
        <p className={styles.pEnvio}>A partir de agora você receberá as novidade e ofertas exclusivas.</p>

        <button onClick={() => {
          setviewForm(true)
          setEmail("")
          setName("")
        }}
          className={styles.buttonEnvio} type="submit">Cadastrar novo e-mail
        </button>
      </div>}
    </section>
  )
}
