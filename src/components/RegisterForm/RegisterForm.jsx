import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@/components";
import { AuthTitle } from "@/layout";

export const RegisterForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const handleRegister = () => {
    // TODO: register validation
  };

  return (
    <>
      <AuthTitle>Create Account</AuthTitle>
      <Input
        ref={nameRef}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white mb-4 transition-colors focus:border-b-yellow-500"
        name="name"
        type="text"
        placeholder="Name"
      />
      <Input
        ref={emailRef}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white mb-4 transition-colors focus:border-b-yellow-500"
        name="email"
        type="email"
        placeholder="Email"
      />

      <Input
        ref={passwordRef}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white  mb-4 transition-colors focus:border-b-yellow-500"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Input
        ref={password2Ref}
        className="rounded-none !border-solid border-b border-b-neutral-500 w-full text-white  mb-6 transition-colors focus:border-b-yellow-500"
        name="password2"
        type="password"
        placeholder="Confirm Password"
      />
      <Button
        onClick={handleRegister}
        className="w-full mb-2  bg-yellow-500 text-black hover:bg-yellow-400"
      >
        <i className="fa-solid fa-right-to-bracket"></i> Sign Up
      </Button>
      <Link
        className="text-sm text-neutral-400 hover:text-neutral-300"
        to="/auth"
      >
        Already have an account?
      </Link>
    </>
  );
};
