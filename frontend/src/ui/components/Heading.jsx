import React from "react";
import styles from "../styles/Heading.module.css";

function Heading({ className, size, children }) {
  const customClass = `${className} ${styles.heading_cl} ${styles[size]}`;

  return <p className={customClass}>{children}</p>;
}

export default Heading;
