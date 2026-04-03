import AddEducation from "../../components/Education/AddEducation";
import Authenticate from "../../Authenticate";

function Page_AddEducation() {
  return (
    <Authenticate>
      <AddEducation />
    </Authenticate>
  );
}

export default Page_AddEducation;
