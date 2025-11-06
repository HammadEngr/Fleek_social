import styles from "../styles/Card.module.css";

function Card({ children, className }) {
  const customClass = `${className} ${styles.card_wrap}`;
  return <div className={customClass}>{children}</div>;
}

export default Card;
