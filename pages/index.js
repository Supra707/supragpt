import Head from "next/head";
import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0/client';
export const metadata={
    title:"SupraGPT-Conversations Redefined by SupraAI",
    description:"Discover the Ultimate in Conversational Excellence with SupraGPT by SupraAI! Our Innovative Application, Powered by OpenAI's Leading Technology, Elevates User Chats to Unprecedented Levels. Immerse in Fluid, Dynamic Conversations as SupraGPT Intelligently Responds to User Inputs. Redefine Interactive Communication and Elevate Your Application's Chat Functionality. Experience the Future of Seamless Conversational Experiences – SupraGPT is Your Gateway to Next-Level User Engagement and Connection!"
}
export default function Home() {
  const{isLoading,user,error}=useUser();

  if(isLoading) return <div>Loading...</div>
  if(error)return <div>{error.message}</div>

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
  
      </Head>
      <h1>Welcome to the Supra &amp; GPT</h1>
      <div className="flex gap-2">
        {
          !!user && <Link href="/api/auth/logout">
          Logout
        </Link>
        }
        {!user &&<>
          <Link href="/api/auth/login">
          LogIn
        </Link>
        <Link href="/api/auth/signup">
          Sign Up
        </Link>
        </>
        }
        <Link href="/chat">Chats</Link>
      </div>
    </div>
  );
}
