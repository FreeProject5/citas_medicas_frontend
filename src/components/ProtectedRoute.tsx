import { Navigate,Outlet } from "react-router";

interface Props {
    isAllowed:boolean
}

export const ProtectedRoute =(isAllowed:Props)=>{
    if (!isAllowed) return <Navigate to="/login"/>
    return <Outlet/>
}