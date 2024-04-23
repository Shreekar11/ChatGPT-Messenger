"use client";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../context/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const { authState: session } = useAuth();

  const handleSignOut = async() => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      router.push("/login");
    } catch (err: any) {
      console.log("Error: ", err);
    }
  }

  return (
    <div className="flex flex-col">
      {/* Divider */}
      <hr className="pb-2 mx-2" />

      <div className="flex p-2 justify-between">
        {/* Profile Image */}
        {session && (
          <img
            onClick={handleSignOut}
            src={session.user?.profilePic!}
            alt="Profile Pic"
            className="h-12 w-12 rounded-full cursor-pointer hover:opacity-50"
          />
        )}

        {/* Greeting */}
        <div className="text-white hidden md:flex">
          <p>
            Hello, <br /> {session?.user?.name!}
          </p>
        </div>

        {/* Settings */}
        <Link href={`/settings`}>
          <Cog6ToothIcon className="h-10 w-10 text-white cursor-pointer hover:opacity-50" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
