import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useAuth } from "@/store";

export const useLogin = () => {
  const { login, logout } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        login(user);
      } else {
        logout();
      }
      setChecking(false);
    });
  }, []);

  return { checking };
};
