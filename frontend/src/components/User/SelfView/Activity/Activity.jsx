import { useNavigate } from "react-router";
import HeadingBar from "../../../../sharedComponents/components/HeadingBar";
import Post from "../../../../sharedComponents/components/Post";
import FlexContainer from "../../../../ui/components/FlexContainer";
import styles from "./Activity.module.css";

function Activity({ user, posts_data, profile_data }) {
  const navigate = useNavigate();

  const createPost = () => {
    navigate("/post/create");
  };

  return (
    <FlexContainer direction="v" className={styles.activity_container_one}>
      <HeadingBar title="Activity" activity={true} onAdd={createPost} />
      <FlexContainer direction="h" className={styles.activity_container_two}>
        {posts_data.map((post) => (
          <Post key={post._id} postData={post} currentUser={profile_data} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Activity;
