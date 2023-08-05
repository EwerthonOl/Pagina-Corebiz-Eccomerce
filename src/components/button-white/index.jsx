import styles from "./styles.module.css" 

export const ButtonWhite = ({icon, text, textAlternative}) => {
  return (
    <button className={styles.buttonWhite}>
      <img className={styles.imgButton} src={icon} alt={textAlternative} />
      <p className={styles.textButton}>{text}</p>
    </button>
  )
}
