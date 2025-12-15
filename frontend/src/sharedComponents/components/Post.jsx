import { Brain, MessageSquareText, ThumbsUp } from "lucide-react";
import Card from "../../ui/components/Card";
import styles from "../styles/Post.module.css";
import { Typography } from "antd";

function Post({ postData, currentUser }) {
  return (
    <Card className={styles.post_card}>
      <div className={styles.post_title}>
        <div className={styles.post_dp}>
          <img src="/hammad.png" alt="" />
        </div>
        <div className={styles.post_author}>
          <p className={styles.post_author_name}>{currentUser.user_name}</p>
          <p className={styles.post_author_prof}>{currentUser.profession}</p>
          <p className={styles.post_author_date}>{postData.timeAgo}</p>
        </div>
      </div>
      <div className={styles.post_content}>
        <Typography>{postData.content}</Typography>
      </div>
      <div className={styles.post_reactions}>
        <div className={styles.reaction}>
          <ThumbsUp strokeWidth={2} size={16} />
        </div>
        <div className={styles.reaction}>
          <Brain strokeWidth={2} size={16} />
        </div>
        <div className={styles.reaction}>
          <MessageSquareText strokeWidth={2} size={16} />
        </div>
      </div>
    </Card>
  );
}

export default Post;
