import { Button } from "antd";
import { Pencil, Plus } from "lucide-react";
import FlexContainer from "../../ui/components/FlexContainer";
import Heading from "../../ui/components/Heading";
import styles from "../styles/HeadingBar.module.css";

function HeadingBar({ title, activity = false }) {
  return (
    <FlexContainer direction="h" className={styles.h_bar_heading}>
      <Heading size="lg" className={styles.h_bar_t}>
        {title}
      </Heading>
      <FlexContainer direction="h" className={styles.h_bar_btns}>
        <Button size="small">
          <Plus size={20} strokeWidth={1} />
        </Button>
        <Button size="small">
          {activity ? <p>see more</p> : <Pencil size={20} strokeWidth={1} />}
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}

export default HeadingBar;
