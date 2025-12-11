import AddExperience from "../../components/Experience/AddExperience";
import Authenticate from "../../Authenticate";
function Page_AddExperience() {
  return (
    <Authenticate>
      <AddExperience />
    </Authenticate>
  );
}

export default Page_AddExperience;
