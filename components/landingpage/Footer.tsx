import Container from "@/components/elements/Container";
import { Heart } from "lucide-react";
import Link from "next/link";
import LogoOnlineClass from "@/public/images/onlineclass.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <Container>
      <footer className=" mt-20 flex justify-between">
        <div className=" mb-3">
          <p className="text-base text-neutral-600 flex items-center justify-center gap-1">
            Propulsé avec <Heart className="text-red-500 " />
            par
            <Link href="/">
              <u>@OnlineClass.pro</u>
            </Link>
          </p>
        </div>
        <div>@Copywright 2024</div>
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:underline">
            Privacy
          </Link>
          <Link href="/" className="hover:underline">
            Terms
          </Link>
          <Image src={LogoOnlineClass} alt="Logo OnlineClass" width={20} />
        </div>
      </footer>
    </Container>
  );
}
