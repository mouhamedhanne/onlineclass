import Container from "@/components/elements/Container";
import Image from "next/image";
import Illustration_Dashbard from "@/public/images/dashboard-shots.png";

import Predict_Analytic from "@/public/images/predict-analytic.svg";

export default function Plateform() {
  return (
    <Container>
      <div className="mb-10 mt-10 relative py-4">
        <div className="absolute -top-[4rem] right-3 z-30 hidden lg:block">
          <Image src={Predict_Analytic} alt="prediction analytique" />
        </div>
        <div className="flex justify-center">
          {/**border border-gray-500 border-8 */}
          <Image
            src={Illustration_Dashbard}
            alt="Illustration Dashboard"
            width={1000}
            className=" rounded-xl"
          />
        </div>
        <div className="absolute z-20 top-[20rem] left-[32rem]">
          <button
            className="px-8 py-2 border-none bg-color_primary hover:bg-color_primary/90
               text-white rounded-full font-bold"
          >
            Voir la démo
          </button>
        </div>
      </div>
    </Container>
  );
}
