import Container from "@/components/elements/Container";
import { Logo } from "@/components/logo/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <div className="flex justify-between items-center mt-4">
            <div>
              <Logo width="60" />
            </div>
            <div className="flex hidden lg:block">
              <ul className="flex items-center space-x-5 font-semibold text-[18px]">
                <li>
                  <Link href="/">News</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">About US</Link>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="border-none px-7 py-3 bg-color_primary text-white font-bold
             rounded-full hover:bg-color_primary/90"
              >
                Connexion
              </button>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
