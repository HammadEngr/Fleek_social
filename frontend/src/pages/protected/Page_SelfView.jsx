import SelfView from "../../components/User/SelfView/SelfView";
import Authenticate from "../../Authenticate";

function Page_SelfView() {
  return (
    <Authenticate>
      <SelfView />
    </Authenticate>
  );
}

export default Page_SelfView;
