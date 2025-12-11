import EditProfile from "../../components/User/EditProfile/EditProfile";
import Authenticate from "../../Authenticate";

function Page_UserDetailsEdit() {
  return (
    <Authenticate>
      <EditProfile />
    </Authenticate>
  );
}

export default Page_UserDetailsEdit;
