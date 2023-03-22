import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Button, Input } from "@/components";
import { AuthTitle } from "@/layout";
import { useState } from "react";
import { useAuth } from "@/store";

export const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const validateForm = () => {
    if (
      validator.isEmpty(emailRef.current.value) ||
      validator.isEmpty(passwordRef.current.value)
    ) {
      toast.error("Make sure the fields are filled");
      return false;
    }

    return true;
  };

  const handleEmailPasswordLogin = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        setLoading(true);
        const { user } = await signInWithEmailAndPassword(
          getAuth(),
          emailRef.current.value,
          passwordRef.current.value
        );
        login(user);
      }
    } catch (error) {
      toast.error("Wrong email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signInWithPopup(getAuth(), new GoogleAuthProvider());
    setLoading(false);
  };

  // TODO: handle login

  return (
    <>
      <AuthTitle>Log In</AuthTitle>
      <Input
        ref={emailRef}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white mb-4 transition-colors focus:border-b-yellow-500"
        name="email"
        type="email"
        placeholder="Email"
      />

      <Input
        ref={passwordRef}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white mb-6 transition-colors focus:border-b-yellow-500"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button
        disabled={loading}
        onClick={handleEmailPasswordLogin}
        className="w-full mb-2  bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-25"
      >
        <i className="fa-solid fa-right-to-bracket"></i> Log in
      </Button>
      <Button
        disabled={loading}
        onClick={handleGoogleLogin}
        className="w-full mb-2  bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-25"
      >
        <i className="fa-brands fa-google"></i> Sign in with Google
      </Button>
      <Link
        className="text-sm text-neutral-400 hover:text-neutral-300"
        to="/auth/register"
      >
        Don't have an account?
      </Link>
    </>
  );
};
