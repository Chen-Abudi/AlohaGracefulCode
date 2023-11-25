import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AlohaGracefulCode</title>
        <meta name="author" content="Grace Chen Abudi" />
        <meta
          name="description"
          content="Welcome to AlohaGracefulCode, a coding challenge platform that combines the artistry of elegant problem-solving with the warm embrace of the Aloha spirit. This platform combines the precision of coding with the beauty of thoughtful problem-solving, creating a space where developers of all levels can flourish. This is a LeetCode-inspired coding challenge platform."
        />
        <meta
          name="keywords"
          content="Next.js, React, TypeScript, Tailwindcss, Firebase, Code Challenges, Grace, Aloha"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
