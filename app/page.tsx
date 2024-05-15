import Features from "@/components/landingpage/Features";
import Header from "@/components/landingpage/Header";
import Herotop from "@/components/landingpage/Herotop";
import Plateform from "@/components/landingpage/Plateform";
import Product from "@/components/landingpage/Product";
import { Bento } from "@/components/landingpage/Bento";
import CTA from "@/components/landingpage/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Herotop />
      <Plateform />
      <Features />
      <Product />
      <Bento />
      <CTA />
    </main>
  );
}
