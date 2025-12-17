import { Alert, Result } from "antd";
import { useRouteError } from "react-router-dom";
import FlexContainer from "../ui/components/FlexContainer";
import styles from "./ErrorBoundry.module.css";

function ErrorBoundry() {
  const error = useRouteError();

  return (
    <FlexContainer direction="v" className={styles.wrap}>
      <div className={styles.e_box}>
        <h1 className={styles.opps}>OPPS!</h1>
        <p className={styles.e_status}>{error.status} - ERROR</p>
      </div>

      <Result status={error.status} />
      <Alert description={`${error.message}`} />
    </FlexContainer>
  );
}

export default ErrorBoundry;
