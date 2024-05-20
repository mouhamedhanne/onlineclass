import Header from "@/components/landingpage/Header";
import Herotop from "@/components/landingpage/Herotop";
import Plateform from "@/components/landingpage/Plateform";
import Product from "@/components/landingpage/Product";
import Bento from "@/components/landingpage/Bento";
import FAQ from "@/components/landingpage/FAQ";
import CTA from "@/components/landingpage/CTA";
import Footer from "@/components/landingpage/Footer";
import { createClientServer } from "@/lib/supabase/server";

const gestStudents = async () => {
  const supabase = createClientServer();
  const { data } = await supabase.from("students").select();
  return data;
};

export default async function Home() {
  const students = await gestStudents();
  console.log(students);

  return (
    <main className="overflow-hidden">
      <Header />
      <Herotop />
      <Plateform />
      <Product />
      <Bento />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
