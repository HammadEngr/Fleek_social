import { useNavigate } from "react-router";
import { useUser } from "../../../contexts/UserContext";
import ProfileHeader from "../../../sharedComponents/components/ProfileHeader";
import Container from "../../../ui/components/Container";
import styles from "./SelfView.module.css";
import { Tabs } from "antd";

function SelfView() {
  const { user } = useUser();
  const navigate = useNavigate();
  const editProfile = () => {
    navigate(`/user/self/${user.id}/edit`);
  };

  const items = [
    {
      key: "1",
      label: "Posts",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Friends",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Photos",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "About",
      children: "Content of Tab Pane 4",
    },
  ];

  const onChange = () => {};

  return (
    <Container>
      <ProfileHeader user={user} selfView={true} editProfile={editProfile} />
      <div className={styles.sv_body_wrap}>
        <div className={styles.sv_create_post}></div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        tabBarGutter={20}
        onChange={onChange}
      />
    </Container>
  );
}

export default SelfView;
