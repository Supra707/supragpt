import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Link from "next/link";
import Lottie from "lottie-react";
import awesome from "../../public/Awesome1.json";
export default function Chat() {
  const { user } = useUser();
  console.log(user);
  if (user) {
    return (
      <div>
        <Head>
          <title>Next JS ChatGPT Starter</title>
        </Head>
        <h1>Welcome to the ChatID page</h1>
        <Link href="/api/auth/logout">Logout</Link>
        <>&nbsp;</>
        <Link href="/">Home</Link>
      </div>
    );
  }
  return (
    <>
      <div className="bg-[#eeeea8] flex-col md:flex-row  flex min-h-screen items-center justify-start md:h-screen lg:min-h-screen gap-4 md:gap-6 overflow-y-hidden">
      
        <div className=" z-10 ml-2 md:ml-9 flex flex-col items-center p-6 text-black gap-2 md:gap-6">

          <div
            className="mb-4  font-extrabold text-2xl"
            style={{ fontFamily: "Robotic" }}
          >
                   <span   style={{ fontFamily: 'Arial' }} className="text-2xl"> &lt; &#47; &gt; </span>
                    Looks like you
          </div>
          <div
            className="mb-4  font-extrabold text-2xl"
            style={{ fontFamily: "Robotic" }}
          >
            are not logged in 
          </div>
          <div
            className="mb-4  font-extrabold text-2xl"
            style={{ fontFamily: "Robotic" }}
          >
            Or Sign up Will You 
            <span   style={{ fontFamily: 'Arial' }} className="text-2xl"> &lt; &#47; &gt;  </span>
          </div>
          <div className="flex gap-12">
          <Link href="/api/auth/login">
        <button className="neon-loader text-black"  style={{ fontFamily: "Robotic" }} >
            
           Login
        </button>
        </Link>
        <Link href="/api/auth/signup">
        <button className="neon-loader text-black"  style={{ fontFamily: "Robotic" }} >
            
          signup
        </button>
        </Link>
          </div>
          
        </div>
        <div>
         
           <Lottie animationData={awesome}/> 
        </div>
      
      </div>
    </>
  );
}
