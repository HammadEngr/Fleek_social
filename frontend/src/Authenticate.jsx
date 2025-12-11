import { Navigate } from "react-router";
import { useUser } from "./contexts/UserContext";

function Authenticate({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Authenticate;
