import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "@/routes";
import { Auth, Home } from "@/layout";
import { AuthForm, RegisterForm } from "@/components";
import { useLogin } from "@/hooks";

import "@/firebase";
import { Loading } from "@/components";

export const AppRouter = () => {
  const { checking } = useLogin();

  if (checking) return <Loading />;
  // if (checking) return <h1>Checking...</h1>;

  return (
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
  );
};
