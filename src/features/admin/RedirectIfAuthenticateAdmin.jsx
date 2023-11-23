import { Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";

export default function RedirectIfAuthenticatedAdmin({ children }) {
  const { authUser } = useAuth();
  if (authUser?.isAdmin) {
    return <Navigate to="/admin/createproduct" />;
  }
  return children;
}
