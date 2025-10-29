import { useNavigate } from "react-router";
import { useUser } from "../../../contexts/UserContext";
import ProfileHeader from "../../../sharedComponents/components/ProfileHeader";
import Container from "../../../ui/components/Container";
import styles from "./SelfView.module.css";

function SelfView() {
  const { user } = useUser();
  console.log(user);
  const navigate = useNavigate();
  const editProfile = () => {
    navigate(`/user/self/${user.id}/edit`);
  };

  return (
    <Container>
      <ProfileHeader user={user} selfView={true} editProfile={editProfile} />
      <div className={styles.sv_body_wrap}>
        <div className={styles.sv_create_post}></div>
      </div>
    </Container>
  );
}

export default SelfView;
