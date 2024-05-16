//import Features from "@/components/landingpage/Features"; <Features />
import Header from "@/components/landingpage/Header";
import Herotop from "@/components/landingpage/Herotop";
import Plateform from "@/components/landingpage/Plateform";
import Product from "@/components/landingpage/Product";
import Bento from "@/components/landingpage/Bento";
import FAQ from "@/components/landingpage/FAQ";
import CTA from "@/components/landingpage/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Herotop />
      <Plateform />
      <Product />
      <Bento />
      <FAQ />
      <CTA />
    </main>
  );
}
