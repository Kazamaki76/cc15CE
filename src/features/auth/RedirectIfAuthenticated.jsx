import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({children}) {
    const {authUser} = useAuth(); // null at first render 
    if(authUser) {
        return<Navigate to="/" />;
    }
    return children;
}
