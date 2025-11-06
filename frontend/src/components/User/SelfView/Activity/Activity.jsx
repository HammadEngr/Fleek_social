import Post from "../../../../sharedComponents/components/Post";
import FlexContainer from "../../../../ui/components/FlexContainer";
import styles from "./Activity.module.css";
import Heading from "../../../../ui/components/Heading";
import { Button } from "antd";

function Activity({ user }) {
  return (
    <FlexContainer direction="v" className={styles.activity_container_one}>
      <FlexContainer direction="h" className={styles.activity_container_three}>
        <FlexContainer direction="h" className={styles.activity_container_four}>
          <Heading title="Activity" size="lg" />
          <Button size="small">Create Post</Button>
        </FlexContainer>
        <a href={`/user/self/${user.id}/activity`}>See all</a>
      </FlexContainer>
      <FlexContainer direction="h" className={styles.activity_container_two}>
        <Post />
        <Post />
        <Post />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Activity;
