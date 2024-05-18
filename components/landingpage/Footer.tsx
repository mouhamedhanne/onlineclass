import Container from "@/components/elements/Container";
import { Heart } from "lucide-react";
import Link from "next/link";
import LogoOnlineClass from "@/public/images/onlineclass.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <Container>
      <footer className="">
        <div className="max-w-4xl flex-wrap w-full flex gap-4 m-auto px-4 pb-10">
          <div className="w-full flex justify-between max-lg:flex-col">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <Image
                  src={LogoOnlineClass}
                  alt="Logo OnlineClass"
                  width={75}
                />
                <h3 className="scroll-m-20 text-xl text-color_title font-semibold tracking-tight">
                  OnlineClass Pro
                </h3>
              </div>
              <p className="text-sm text-muted-foreground italic">
                © 2024 OnlineClass - All rights reserved.
              </p>
            </div>
            <div className="flex flex-col items-start mt-4 lg:mt-0 lg:items-end gap-4">
              <p className="text-lg text-white font-semibold">Legal</p>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Privacy
              </Link>
            </div>

            <div className="flex flex-col items-start mt-4 lg:mt-0 lg:items-end gap-4">
              <p className="text-lg text-white font-semibold">Social</p>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Twitter
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Instagram
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-base text-neutral-600 flex items-center justify-center gap-1">
            Propulsé avec <Heart className="text-red-500 " />
            par
            <Link href="/">
              <u>@OnlineClass.pro</u>
            </Link>
          </p>
        </div>
      </footer>
    </Container>
  );
}
