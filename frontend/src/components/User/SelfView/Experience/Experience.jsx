import HeadingBar from "../../../../sharedComponents/components/HeadingBar";
import FlexContainer from "../../../../ui/components/FlexContainer";
import Heading from "../../../../ui/components/Heading";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <FlexContainer direction="v" className={styles.experience_box}>
      <HeadingBar title="Experience" />
      <FlexContainer direction="v" className={styles.experience_title_box}>
        <Heading size="md" className={styles.experience_job_title}>
          Full Stack Developer
        </Heading>
        <FlexContainer direction="h" className={styles.experience_company}>
          <Heading size="sm">SAS Group Pvt Ltd</Heading>
          <Heading size="sm">Full time</Heading>
        </FlexContainer>
        <FlexContainer direction="h" className={styles.experience_duration}>
          <Heading size="xs">Jan 2023</Heading>
          <Heading size="xs">Present</Heading>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Experience;
