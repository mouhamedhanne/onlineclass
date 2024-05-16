import Container from "@/components/elements/Container";
import Demosvg from "@/public/images/icon-cloud.png";
import Image from "next/image";
import Link from "next/link";

export default function Bento() {
  return (
    <Container>
      <div className="mx-2">
        <div className="block py-12 mt-12 2xl:px-10 px-5 leading-7 mx-auto justify-center max-w-6xl text-left text-gray-900">
          <div className="relative w-full px-8 mx-auto leading-7 text-gray-900">
            <div className="flex flex-col flex-wrap items-center text-left md:flex-row">
              <div className="flex-1 opacity-100 xl:pr-6 transform-none">
                <h2 className="box-border mt-0 text-4xl  font-semibold text-left text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl mb-7 md:text-left">
                  <span className="text-color_primary"> IA Assistance </span>
                  <span className="text-[#1E293B]">Personnalisée</span>
                </h2>
                <p className="box-border mt-0 mb-8 text-base font-normal text-left text-gray-500 lg:text-xl md:text-left lg:mb-8">
                  Notre IA analyse rapidement les documents téléchargés et
                  fournit des réponses précises et pertinentes aux questions des
                  étudiants. Cette fonctionnalité offre un soutien immédiat pour
                  dissiper les doutes et clarifier les concepts difficiles.
                </p>
                <div className="box-border leading-7 text-center text-gray-900 md:text-left">
                  <button className="ml-onclick-form inline-block w-full px-5 py-3 mb-3 mr-1 text-base font-medium text-blue-600 no-underline align-middle bg-blue-100 rounded-lg cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 focus-within:bg-blue-100 focus-within:border-blue-100">
                    Commencer
                  </button>
                  <button className="inline-block w-full px-5 py-3 mb-3 mr-1 text-base font-medium text-green-600 no-underline align-middle bg-green-100 rounded-lg cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-green-50 hover:border-green-100 hover:text-green-600 focus-within:bg-green-100 focus-within:border-green-100">
                    En Savoir Plus
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
                        OnlineClass.pro AI
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-bold text-blue-600 ">
                      Chat2PDF
                    </p>
                    <p className="mb-2 text-sm text-gray-500">
                      Notre fonctionnalité Chat2PDF permet aux étudiants de
                      poser des questions directement à notre intelligence
                      artificielle en téléchargeant leurs fichiers PDF de cours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 xl:pt-12 xl:pb-12">
        <div
          className="container relative flex flex-col justify-between h-full 
          max-w-5xl px-10 mx-auto xl:px-0"
        >
          <h2
            className="mt-8 text-4xl sm:text-5xl font-medium tracking-tight 
            text-black "
          >
            Boostez votre apprentissage 🚀
            <span className="text-color_primary block pt-3 ">
              avec OnlineClass ✨
            </span>
          </h2>
          <p className="mb-12 mt-10 text-lg max-w-2xl text-gray-500">
            Obtenez un soutien personnalisé et un calendrier clair, tout en
            gagnant des badges pour rester motivé dans votre apprentissage
            technique. Une plateforme conçue pour vous aider à exceller dans
            votre domaine d'étude.
          </p>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-3 mb-8">
              <div
                className="relative h-full ml-0 md:mr-5 block transform 
                hover:scale-105 hover:-rotate-1"
              >
                <span
                  className="absolute top-0 left-0 w-full h-full mt-1 
                    ml-1 bg-color_primary rounded-lg"
                ></span>
                <div
                  className="relative h-full p-5 bg-white transform  
                      border-2 border-color_primary rounded-lg"
                >
                  <div className="flex items-center -mt-1">
                    <Image src={Demosvg} alt="demo" width={50} />
                    <h3
                      className="my-2 ml-3 text-lg font-semibold 
                            text-gray-800"
                    >
                      Système de notation et de prise de notes
                    </h3>
                  </div>
                  <p
                    className="mt-3 mb-1 text-xs font-medium text-green-500 
                    uppercase"
                  ></p>
                  <p className="mb-2 text-sm text-gray-500">
                    Prenez des notes directement sur la plateforme pendant que
                    vous étudiez. Les notes prises sont automatiquement
                    sauvegardées et disponibles pour une consultation
                    ultérieure.
                  </p>
                  <Link
                    href="/"
                    className=" lg:block py-2 px-6 w-24 bg-gray-50
                    transform hover:scale-105 hover:bg-green-50 text-sm 
                    text-gray-600 font-semibold rounded-xl"
                  >
                    Get it
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-3 mb-8">
              <div
                className="relative h-full ml-0 md:mr-5 block transform 
                hover:scale-105 hover:-rotate-1"
              >
                <span
                  className="absolute top-0 left-0 w-full h-full mt-1 ml-1 
                   bg-green-500 rounded-lg"
                ></span>
                <div
                  className="relative h-full p-5 bg-white transform  
                     border-2 border-green-500 rounded-lg"
                >
                  <div className="flex items-center -mt-1">
                    <Image src={Demosvg} alt="demo" width={50} />
                    <h3
                      className="my-2 ml-3 text-lg font-semibold 
                          text-gray-800"
                    >
                      Mentoring par des professionnels
                    </h3>
                  </div>
                  <p
                    className="mt-3 mb-1 text-xs font-medium 
                    text-green-500 uppercase"
                  ></p>
                  <p className=" mb-2 text-sm text-gray-500">
                    Bénéficiez de l'accompagnement de mentors expérimentés dans
                    votre domaine d'étude. Recevez des conseils personnalisés,
                    des réponses à vos questions et un soutien pour surmonter
                    les défis d'apprentissage.
                  </p>
                  <Link
                    href="/"
                    className=" lg:block py-2 px-6 w-24 
                      bg-gray-50 transform hover:scale-105 hover:bg-green-50 
                      text-sm text-gray-600 font-semibold rounded-xl"
                  >
                    Get it
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 px-3 mb-8">
              <div
                className="relative h-full ml-0 md:mr-5 block transform 
                hover:scale-105 hover:-rotate-1"
              >
                <span
                  className="absolute top-0 left-0 w-full h-full mt-1 ml-1 
                    bg-green-500 rounded-lg"
                ></span>
                <div
                  className="relative h-full p-5 bg-white transform  
                      border-2 border-green-500 rounded-lg"
                >
                  <div className="flex items-center -mt-1">
                    <Image src={Demosvg} alt="demo" width={50} />
                    <h3
                      className="my-2 ml-3 text-lg font-semibold 
                            text-gray-800"
                    >
                      Calendrier des examens
                    </h3>
                  </div>
                  <p
                    className="mt-3 mb-1 text-xs font-medium 
                          text-green-500 uppercase"
                  ></p>
                  <p className="mb-2 text-sm text-gray-500">
                    Consultez un calendrier des examens pour rester organisé et
                    planifier votre étude. Les dates importantes sont clairement
                    indiquées pour vous aider à vous préparer efficacement.
                  </p>
                  <Link
                    href="/"
                    className=" lg:block py-2 px-6 w-24 
                          bg-gray-50 transform hover:scale-105 
                          hover:bg-green-50 text-sm text-gray-600 
                          font-semibold rounded-xl"
                  >
                    Get it
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 px-3 mb-8">
              <div
                className="relative h-full ml-0 md:mr-5 block transform 
                hover:scale-105 hover:-rotate-1"
              >
                <span
                  className="absolute top-0 left-0 w-full h-full mt-1 ml-1 
                    bg-green-500 rounded-lg"
                ></span>
                <div
                  className="relative h-full p-5 bg-white transform  
                      border-2 border-green-500 rounded-lg"
                >
                  <div className="flex items-center -mt-1">
                    <Image src={Demosvg} alt="demo" width={50} />
                    <h3
                      className="my-2 ml-3 text-lg font-semibold 
                            text-gray-800"
                    >
                      Système de niveaux et de badges
                    </h3>
                  </div>
                  <p
                    className="mt-3 mb-1 text-xs font-medium 
                          text-green-500 uppercase"
                  ></p>
                  <p className="mb-2 text-sm text-gray-500">
                    Gagnez des badges et progressez à travers les niveaux pour
                    vous motiver et vous engager dans votre apprentissage. Les
                    récompenses visuelles renforcent la satisfaction des
                    étudiants et encouragent la persévérance.
                  </p>
                  <Link
                    href="/"
                    className=" lg:block py-2 px-6 w-24 
                          bg-gray-50 transform hover:scale-105 
                          hover:bg-green-50 text-sm text-gray-600 
                          font-semibold rounded-xl"
                  >
                    Get it
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
