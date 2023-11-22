import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LeetHub</title>
        <meta name="author" content="Grace Chen Abudi" />
        <meta
          name="description"
          content="Welcome to LeetHub, your go-to platform for mastering coding challenges and enhancing your programming skills! LeetHub is a LeetCode-inspired coding challenge platform designed to provide a seamless and feature-rich experience for programming of all levels."
        />
        <meta
          name="keywords"
          content="Next.js, React, TypeScript, Tailwindcss, Firebase, Code Challenges"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
