import Container from "@/components/elements/Container";
import Demosvg from "@/public/images/icon-cloud.png";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <Container>
      <div className="mx-2">
        <div className="block py-12 mt-12 2xl:px-10 px-5 leading-7 mx-auto justify-center max-w-6xl text-left text-gray-900">
          <div className="relative w-full px-8 mx-auto leading-7 text-gray-900">
            <div className="flex flex-col flex-wrap items-center text-left md:flex-row">
              <div className="flex-1 opacity-100 xl:pr-6 transform-none">
                <h2 className="box-border mt-0 text-4xl  font-semibold text-left text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl mb-7 md:text-left">
                  <span className="text-blue-600">Landing Page</span>
                  <span className="block">Checklist</span>
                </h2>
                <p className="box-border mt-0 mb-8 text-base font-normal text-left text-gray-500 lg:text-xl md:text-left lg:mb-8">
                  Build your best landing page with 100+ hand-picked tools;
                  landing page builders, growth tools, and booster resources.
                </p>
                <div className="box-border leading-7 text-center text-gray-900 md:text-left">
                  <button className="ml-onclick-form inline-block w-full px-5 py-3 mb-3 mr-1 text-base font-medium text-blue-600 no-underline align-middle bg-blue-100 rounded-lg cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 focus-within:bg-blue-100 focus-within:border-blue-100">
                    Suscribe
                  </button>
                  <button className="inline-block w-full px-5 py-3 mb-3 mr-1 text-base font-medium text-green-600 no-underline align-middle bg-green-100 rounded-lg cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-green-50 hover:border-green-100 hover:text-green-600 focus-within:bg-green-100 focus-within:border-green-100">
                    Discover tools
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center flex-1 w-full px-5 mt-16 leading-7 text-gray-900 md:justify-end md:mt-0">
                <div className="relative h-full ml-0 md:mr-5 block -rotate-1 transform hover:scale-105 hover:-rotate-2">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white transform  border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <Image src={Demosvg} alt="demo" height={48} width={48} />
                      <h3 className="my-2 ml-3 text-lg font-semibold text-gray-800">
                        100+ Landing Page Tools
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-bold text-blue-600 uppercase">
                      STEP by STEP
                    </p>
                    <p className="mb-2 text-sm text-gray-500">
                      A curated library of landing page resources. You'll have
                      up-to-date landing pages in no time.
                    </p>
                    <Link
                      href="/"
                      className="lg:block py-2 px-4 w-2/5 bg-gray-50 transform text-sm text-gray-500 text-center font-semibold rounded-xl"
                    >
                      tools for makers 🥳
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </Container>
  );
}
