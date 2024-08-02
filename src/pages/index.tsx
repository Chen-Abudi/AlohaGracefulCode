import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium"></h1>
      </main>
    </>
  );
}
