import { useUser } from "@auth0/nextjs-auth0/client";

import Head from "next/head";
import Link from "next/link";
import Lottie from "lottie-react";
import awesome from "../../public/Awesome1.json";
import awesome2 from "../../public/Awesome2.json";
import ChatSideBar from "components/Sidebar/ChatSideBar";
import InteractiveDrawer from "components/Sidebar/MobileSideBar";
import { useState, useEffect } from "react";
import { main } from "pages/api/chat/sendMessage.mjs";
import ConfettiExplosion from "react-confetti-explosion";
export default function Chat() {
  const { user } = useUser();
  const [messageText, setMessageText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showSupraGpt, setShowSupraGpt] = useState(true);

  const [isExploding, setIsExploding] = useState(false);
  useEffect(() => {
    // If there is chat history, hide the SupraGpt message
    if (chatHistory.length > 0) {
      setShowSupraGpt(false);
    }
  }, [chatHistory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = messageText;
    if (userMessage == "") {
      alert(
        "Type in something!.Don't be extra smart.This api has limits(Only$5).I am poor man"
      );    
      return;
    }
    // Update chat history with user's message
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { type: "user", message: userMessage },
    ]);
    // Show confetti on successful form submission
    setIsExploding(true);
    setMessageText("");
    setTimeout(() => {
      setIsExploding(false);
    }, 5000);

    try {
      const apiResponse = await main(userMessage);

      // Update chat history with API response
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "api", message: apiResponse },
      ]);

      setuiresponse(apiResponse);
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return (
      // The regular chat page
      <>
        <Head>
          <title>New Chat</title>
        </Head>
        <div className="flex justify-center">
          <span> {isExploding && <ConfettiExplosion />}</span>
          <span>{isExploding && <ConfettiExplosion />}</span>
        </div>

        <div className="grid h-screen grid-cols-1 overflow-y-hidden md:grid-cols-[260px_1fr] ">
          <ChatSideBar className="md:col-span-1" />

          <div className="flex flex-1 flex-col overflow-y-auto bg-gray-700 text-white">
            {/* Chat window */}

            <div className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10">
              <InteractiveDrawer />
            </div>

            {/* Render SupraGpt message only if showSupraGpt is true */}
            {showSupraGpt && (
              <div>
                <div className="flex justify-center">
                  <Lottie
                    animationData={awesome2}
                    className="h-96 w-96  md:h-32 md:w-32 lg:h-[500px] lg:w-[500px]"
                  />
                </div>

                <div className="neon-gloww mb-16 text-center text-4xl font-extrabold text-white lg:text-5xl">
                  SupraGpt
                  <br />
                  <div className="neon-gloww text-white-500 text-xl">
                    The Glowish Generative Pre Trained Transformer
                  </div>
                </div>
              </div>
            )}

            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={
                  chat.type === "user" ? "user-message" : "api-message"
                }
              >
                {chat.message}
              </div>
            ))}
            {/* Footer with form */}

            <footer className=" bg-gray-800 p-4 md:p-6 lg:p-8 xl:p-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center  md:flex-row md:gap-4"
              >
                <textarea
                  className="mb-4  w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                  placeholder="Send a message..."
                  value={messageText}
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  name="message"
                />
                <button type="submit" className="neon-loader mb-4 text-black">
                  Submit
                </button>
              </form>
            </footer>
          </div>
        </div>
      </>
    );
  }

  return (
    // The chat page for unauthorized access
    <>
      <div className="flex min-h-screen flex-col  items-center justify-start gap-4 overflow-y-hidden bg-[#eeeea8] md:h-screen md:flex-row md:gap-6 lg:min-h-screen">
        <div className=" z-10 ml-2 flex flex-col items-center gap-2 p-6 text-black md:ml-9 md:gap-6">
          <div
            className="mb-4  text-2xl font-extrabold"
            style={{ fontFamily: "Robotic" }}
          >
            <span style={{ fontFamily: "Arial" }} className="text-2xl">
              {" "}
              &lt; &#47; &gt;{" "}
            </span>
            Looks like you
          </div>
          <div
            className="mb-4  text-2xl font-extrabold"
            style={{ fontFamily: "Robotic" }}
          >
            are not logged in
          </div>
          <div
            className="mb-4  text-2xl font-extrabold"
            style={{ fontFamily: "Robotic" }}
          >
            Or Sign up Will You
            <span style={{ fontFamily: "Arial" }} className="text-2xl">
              {" "}
              &lt; &#47; &gt;{" "}
            </span>
          </div>
          <div className="flex gap-12">
            <Link href="/api/auth/login">
              <button
                className="neon-loader text-black"
                style={{ fontFamily: "Robotic" }}
              >
                Login
              </button>
            </Link>
            <Link href="/api/auth/signup">
              <button
                className="neon-loader text-black"
                style={{ fontFamily: "Robotic" }}
              >
                signup
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Lottie animationData={awesome} />
        </div>
      </div>
    </>
  );
}
