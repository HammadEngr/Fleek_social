import { useNavigate } from "react-router";
import { useUser } from "../../../contexts/UserContext";
import ProfileHeader from "../../../sharedComponents/components/ProfileHeader";
import FlexContainer from "../../../ui/components/FlexContainer";
import Activity from "./Activity/Activity";
import styles from "./SelfView.module.css";

function SelfView() {
  const { user } = useUser();
  const navigate = useNavigate();
  const editProfile = () => {
    navigate(`/user/self/${user.id}/edit`);
  };

  return (
    <FlexContainer direction="v" className={styles.selfview_container}>
      <ProfileHeader user={user} selfView={true} editProfile={editProfile} />
      <Activity user={user} />
    </FlexContainer>
  );
}

export default SelfView;
