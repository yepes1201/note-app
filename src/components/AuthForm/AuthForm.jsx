import { useRef } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Button, Input } from "@/components";
import { AuthTitle } from "@/layout";
import { useState } from "react";

export const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signInWithPopup(getAuth(), new GoogleAuthProvider());
    setLoading(false);
  };

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
        onClick={null}
        className="w-full mb-2  bg-yellow-500 text-black hover:bg-yellow-400"
      >
        <i className="fa-solid fa-right-to-bracket"></i> Log in
      </Button>
      <Button
        disabled={loading}
        onClick={handleGoogleLogin}
        className="w-full mb-2  bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
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
