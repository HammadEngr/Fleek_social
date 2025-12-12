import HeadingBar from "../../../../sharedComponents/components/HeadingBar";
import FlexContainer from "../../../../ui/components/FlexContainer";
import Heading from "../../../../ui/components/Heading";
import styles from "./Experience.module.css";
import { useNavigate } from "react-router-dom";

function Experience({ experiences }) {
  const navigate = useNavigate();
  const addExperience = () => {
    navigate("/experience/add");
  };
  return (
    <FlexContainer direction="v" className={styles.experience_box}>
      <HeadingBar title="Experience" onAdd={addExperience} />
      {experiences.map((exp_data, i) => (
        <FlexContainer
          direction="v"
          className={styles.experience_title_box}
          key={`experiences-${i}`}
        >
          <Heading size="md" className={styles.experience_job_title}>
            {exp_data.title}
          </Heading>
          <FlexContainer direction="h" className={styles.experience_company}>
            <Heading size="sm">{exp_data.employer}</Heading>
            <Heading size="sm">Full time</Heading>
          </FlexContainer>
          <FlexContainer direction="h" className={styles.experience_duration}>
            <Heading size="xs">{exp_data.startDateFormatted}</Heading>

            <Heading size="xs">
              {exp_data.endDateFormatted
                ? `to ${exp_data.endDateFormatted}`
                : exp_data.currentlyWorking}
            </Heading>
          </FlexContainer>
        </FlexContainer>
      ))}
    </FlexContainer>
  );
}

export default Experience;
