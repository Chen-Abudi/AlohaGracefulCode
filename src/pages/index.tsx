import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
      </main>
    </>
  );
}
