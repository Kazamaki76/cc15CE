import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

export default function adminLayout() {
  return(
    <>
    
    
    <AdminHeader/>
    <Outlet />
    </>
  )
}