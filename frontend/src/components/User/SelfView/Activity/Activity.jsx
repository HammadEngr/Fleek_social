import Post from "../../../../sharedComponents/components/Post";
import FlexContainer from "../../../../ui/components/FlexContainer";
import styles from "./Activity.module.css";
import Heading from "../../../../ui/components/Heading";
import { Button } from "antd";
import HeadingBar from "../../../../sharedComponents/components/HeadingBar";

function Activity({ user }) {
  return (
    <FlexContainer direction="v" className={styles.activity_container_one}>
      <HeadingBar title="Activity" activity={true} />
      <FlexContainer direction="h" className={styles.activity_container_two}>
        <Post />
        <Post />
        <Post />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Activity;
