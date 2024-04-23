"use client";

import { signInWithPopup } from "firebase/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/Auth";
import { auth, googleProvider } from "../firebase";
import { UserCredential } from "../type";

const Login = () => {
  const router = useRouter();
  const { setUserAuthInfo } = useAuth();
  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const userCredential: UserCredential = {
        user: {
          name: response.user.displayName,
          email: response.user.email,
          profilePic: response.user.photoURL,
          uid: response.user.uid,
        },
      };
      setUserAuthInfo(userCredential);
      toast.success("User sign in Successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      {/* <Image src="/logo.svg" width={300} height={300} alt="Logo" /> */}
      <button
        onClick={handleGoogleSignIn}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Login to use Chatbot Messenger
      </button>
    </div>
  );
};

export default Login;
