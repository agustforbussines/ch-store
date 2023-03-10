"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function AuthBtn() {
  const { data: session } = useSession();

  const handleLogout = () => {
    localStorage.removeItem("cart");
    signOut();
  };

  return (
    <>
      {session?.user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 cursor-pointer px-4 py-2 rounded font-semibold text-white hover:scale-105 transition duration-200"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/auth"
          className="bg-primary cursor-pointer px-4 py-2 rounded font-semibold text-white placeholder: hover:scale-105 transition duration-200"
        >
          Login
        </Link>
      )}
    </>
  );
}

export default AuthBtn;
