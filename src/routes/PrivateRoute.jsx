import { useAuth } from "@/store";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
