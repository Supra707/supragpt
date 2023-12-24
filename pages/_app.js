"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ToasterContext from "./context/ToastContext"
function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Lines />
      
        <ToasterContext />
        <Component {...pageProps} />
        
        <ScrollToTop />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
