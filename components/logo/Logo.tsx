import Image from "next/image";
import OlineclassLogo from "@/public/images/onlineclass.svg";

export const Logo = ({ width }: any) => {
  return (
    <div className="flex items-center gap-[4px]">
      <Image src={OlineclassLogo} alt="OnlineClass Logo" width={width} />
      <h2 className="text-3xl font-extrabold">OnlineClass</h2>
    </div>
  );
};
