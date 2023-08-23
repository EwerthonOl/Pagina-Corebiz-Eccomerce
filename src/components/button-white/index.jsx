import styles from "./styles.module.css"
import PropTypes from 'prop-types';

export const ButtonWhite = ({ icon, text, textAlternative }) => {

  ButtonWhite.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textAlternative: PropTypes.string.isRequired,
  }

  return (
    <button className={styles.buttonWhite}
      onClick={() => {
        scrollTo({ behavior: "smooth", top })
      }} >
      <img className={styles.imgButton} src={icon} alt={textAlternative} />
      <p className={styles.textButton}>{text}</p>
    </button>
  )
}
