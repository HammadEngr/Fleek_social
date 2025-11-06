import styles from "../styles/FlexContainer.module.css";

function FlexContainer({ children, direction, className }) {
  const customClass =
    direction === "v"
      ? `${className} ${styles._container} ${styles.v_flex}`
      : `${className} ${styles._container} ${styles.h_flex}`;

  return <div className={customClass}>{children}</div>;
}

export default FlexContainer;
