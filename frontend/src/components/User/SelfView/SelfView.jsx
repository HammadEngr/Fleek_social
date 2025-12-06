import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useUser } from "../../../contexts/UserContext";
import ProfileHeader from "../../../sharedComponents/components/ProfileHeader";
import FlexContainer from "../../../ui/components/FlexContainer";
import callApi from "../../../utils/callApi";
import Activity from "./Activity/Activity";
import Experience from "./Experience/Experience";
import styles from "./SelfView.module.css";

function SelfView() {
  const { user } = useUser();

  const navigate = useNavigate();
  const editProfile = () => {
    navigate(`/user/self/${user.id}/edit`);
  };

  // FETCH USER PROFILE DETAILS
  const {
    data: profile_data,
    isLoading: profile_loading,
    error: profileError,
  } = useQuery({
    queryKey: ["user_profile", user.id],
    queryFn: () => callApi({ method: "GET", url: `user/${user.id}` }),
  });

  // FETCH USER EXPERIENCES
  const {
    data: exp_data,
    isLoading: exp_loading,
    error: exp_error,
  } = useQuery({
    queryKey: ["user_experiences", user.id],
    queryFn: () => callApi({ method: "GET", url: `user/exp/${user.id}` }),
  });

  return (
    <FlexContainer direction="v" className={styles.selfview_container}>
      {!profile_loading && profile_data.status === true && (
        <ProfileHeader
          profile_data={profile_data.data}
          selfView={true}
          editProfile={editProfile}
        />
      )}
      <Activity user={user} />
      {!exp_loading && exp_data.status === true && (
        <Experience experiences={exp_data.data.experiences} />
      )}
    </FlexContainer>
  );
}

export default SelfView;
