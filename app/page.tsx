import Home from "@/components/home";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import SOF from "@/components/sof";
import Belief from "@/components/belief";
import Offering from "@/components/offering";
import Units from "@/components/units";
import BBA from "@/components/bba";

export default function Root() {
  return (
    <main className="flex min-h-screen bg-white flex-col">
      <div>
        <Header />

        <Home />
        <SOF />
        <Belief />
        <Offering />
        <Units />
        <BBA />
        <Footer />
      </div>
    </main>
  );
}
