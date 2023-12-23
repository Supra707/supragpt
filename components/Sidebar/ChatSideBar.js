import React from "react";
import Link from "next/link";
import Image from "next/image";
import faltu from "../../public/faltu.svg"
const ChatSideBar = () => {
  return (
    <div className="hidden bg-gray-900  md:block ">
      <div className="mr-8 flex h-screen items-end justify-center">
    
        <Link href="/api/auth/logout">
          <button className="neon-loader mb-4 text-black flex gap-4">
          <Image 
            src={faltu}
            width={20}
            height={20}
            alt="Logout icon"
          ></Image>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChatSideBar;
