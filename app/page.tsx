import Home from "@/components/home";
import SOF from "@/components/sof";
import Belief from "@/components/belief";
import Offering from "@/components/offering";
import Units from "@/components/units";
import BBA from "@/components/bba";
import Head from "next/head";

export default function Root() {
  return (
    <div>
      <Head>
        <link rel="icon" href="./kduic+.ico" sizes="any" />
      </Head>
      <main className="flex min-h-screen bg-white font text-black flex-col">
        <div>
          <Home />
          <SOF />
          <Belief />
          <Offering />
          <Units />
          <BBA />
        </div>
      </main>
    </div>
  );
}
