import React from "react";
import { Spin } from "antd";
import FlexContainer from "./FlexContainer";
import styles from "../styles/Loader.module.css";

function Loader() {
  return (
    <FlexContainer className={styles.loader_bd}>
      <Spin description="Loading" size="large">
        Loading..
      </Spin>
    </FlexContainer>
  );
}

export default Loader;
