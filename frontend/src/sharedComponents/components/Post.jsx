import { Brain, MessageSquareText, ThumbsUp } from "lucide-react";
import Card from "../../ui/components/Card";
import styles from "../styles/Post.module.css";
import { Typography } from "antd";

function Post() {
  return (
    <Card className={styles.post_card}>
      <div className={styles.post_title}>
        <div className={styles.post_dp}>
          <img src="/hammad.png" alt="" />
        </div>
        <div className={styles.post_author}>
          <p className={styles.post_author_name}>Hammad Ahmed</p>
          <p className={styles.post_author_prof}>Software Engineer</p>
          <p className={styles.post_author_date}>3 mo</p>
        </div>
      </div>
      <div className={styles.post_content}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          expedita accusamus esse neque dicta, necessitatibus itaque excepturi
          praesentium tempore veritatis ratione odit laborum iste ad magni. Sed
          explicabo perspiciatis nemo.
        </Typography>
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
