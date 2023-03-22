import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute, PublicRoute } from "@/routes";
import { Auth, Home } from "@/layout";
import { AuthForm, RegisterForm, Loading } from "@/components";
import { useLogin } from "@/hooks";

import "@/firebase";

export const AppRouter = () => {
  const { checking } = useLogin();

  if (checking) return <Loading />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/auth" element={<PublicRoute />}>
            <Route
              index
              element={
                <Auth>
                  <AuthForm />
                </Auth>
              }
            />

            <Route
              path="register"
              element={
                <Auth>
                  <RegisterForm />
                </Auth>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
    </>
  );
};
