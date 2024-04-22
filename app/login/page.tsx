"use client";

import React from "react";
import Login from "../../components/Login";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const auth =
    typeof window !== "undefined" ? !!localStorage.getItem("user") : "";
  if (auth) {
    router.push("/");
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
