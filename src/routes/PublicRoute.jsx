import { useAuth } from "@/store";
import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = () => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
