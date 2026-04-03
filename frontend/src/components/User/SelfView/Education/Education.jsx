import FlexContainer from "../../../../ui/components/FlexContainer";
import styles from "./Education.module.css";
import HeadingBar from "../../../../sharedComponents/components/HeadingBar";
import Heading from "../../../../ui/components/Heading";
function Education() {
  return (
    <FlexContainer direction="v" className={styles.education_box}>
      <HeadingBar title="Education" onAdd={() => {}} />
      <FlexContainer direction="v" className={styles.education_title_box}>
        <Heading size="md" className={styles.education_title}>
          University of Lahore
        </Heading>
        <FlexContainer direction="h" className={styles.education_degree}>
          <Heading size="sm">BS Computer Science</Heading>
        </FlexContainer>
        <FlexContainer direction="h" className={styles.education_duration}>
          <Heading size="xs">2019</Heading>
          <Heading size="xs">to 2023</Heading>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Education;
