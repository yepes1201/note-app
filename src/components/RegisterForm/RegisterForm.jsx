import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import { Button, Input } from "@/components";
import { AuthTitle } from "@/layout";
import { useAuth } from "@/store";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";

export const RegisterForm = () => {
  const { login } = useAuth();
  const [fetching, setFetching] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const validateForm = () => {
    if (validator.isEmpty(nameRef.current.value)) {
      toast.error("Invalid name");
      return false;
    }

    if (!validator.isEmail(emailRef.current.value)) {
      toast.error("Invalid email");
      return false;
    }

    if (
      !validator.isStrongPassword(passwordRef.current.value) ||
      !validator.equals(passwordRef.current.value, password2Ref.current.value)
    ) {
      toast.error("Make sure the password is atleast 6 characters and matches");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        setFetching(true);
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );

        await updateProfile(auth.currentUser, {
          displayName: nameRef.current.value,
        });

        login({ ...user, displayName: nameRef.current.value });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
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
        disabled={fetching}
        onClick={handleRegister}
        className="w-full mb-2  bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-25"
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
