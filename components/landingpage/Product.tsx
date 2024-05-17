import Image from "next/image";
import Illustration from "@/public/images/illustration-dashboard.png";
import Link from "next/link";
import { FileQuestion, TrendingUp, MessageCircleQuestion } from "lucide-react";

export default function Product() {
  return (
    <div>
      <div className="relative mt-16 pb-6 sm:pt-16 sm:pb-12 lg:pb-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className=" mx-auto text-center">
            <h2
              className="text-2xl font-bold leading-[4.5rem] 
              text-color_title lg:text-5xl"
            >
              Une{" "}
              <b className="relative inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="255"
                  height="36"
                  viewBox="0 0 255 36"
                  fill="none"
                  className="absolute top-8 -bottom-2 left-[-22%] lg:top-11 z-0 text-color_primary
                    inline-block w-[150%] "
                >
                  <path
                    d="M2.99975 17.6351C116.771 12.3405 178.178 12.7036 252 18.0966"
                    stroke="currentColor"
                    stroke-width="5.75696"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <span className="relative z-10 ">expérience</span>
              </b>{" "}
              d'apprentissage...
            </h2>
            <p className="mt-5 lg:mt-8 text-base text-gray-600 sm:text-xl">
              Accédez à un contenu de qualité, des outils interactifs et
              <br /> un soutien personnalisé pour réussir dans votre parcours
              éducatif.
            </p>
            <Link
              href="/"
              className="group relative inline-flex items-center font-bold rounded-full
              justify-center bg-color_primary px-8 py-2 text-white mt-4 h-12"
            >
              En Savoir Plus
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
         sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                {/**Daily note taking */}
              </h2>
              <p
                className="mt-2 text-3xl font-bold tracking-tight 
                text-color_title sm:text-4xl"
              >
                Parcours d'apprentissage<u> structuré </u>
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Accédez à des cours organisés et structurés pour chaque domaine
                technique et niveau de compétence. Chaque cours est conçu pour
                offrir une progression logique et approfondie des concepts clés.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 430 430"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                    >
                      <path
                        d="M156.564 210.382C130.162 218.519 100.241 212.136 79.3391 191.234C58.4371 170.332 52.0535 140.411 60.1909 114.008L100.389 154.206C106.405 160.223 116.158 160.225 122.172 154.211L151.211 125.172C157.225 119.158 157.223 109.405 151.206 103.389L111.008 63.191C137.411 55.0536 167.332 61.4372 188.234 82.3392C209.136 103.241 215.519 133.162 207.382 159.564L345.117 297.299C358.754 310.937 358.758 333.043 345.127 346.675L343.675 348.127C330.043 361.759 307.937 361.754 294.299 348.117L156.564 210.382Z"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M311.167 312.752L317.531 319.116"
                        stroke="#FFA500"
                        stroke-width="18"
                        stroke-linecap="round"
                      />
                    </svg>
                    Une variété de domaines
                  </dt>{" "}
                  <dd className="inline">
                    tels que l'électricité, la mécanique auto, la soudure, etc.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 430 431"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                    >
                      <path
                        d="M150 375.5V245.5H80V375.5"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M250 375.5V140.5H180V375.5"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M350 375.5V55.5H280V375.5"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M375 375.5H55"
                        stroke="#121331"
                        stroke-width="12"
                        stroke-miterlimit="14.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Progression logique
                  </dt>
                  <dd className="inline">
                    Les cours sont conçus pour offrir une progression logique,
                    commençant par les concepts de base et avançant vers des
                    sujets plus avancés.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 430 430"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                    >
                      <path
                        d="M134.94 241.69H295.06"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M134.94 295.06H295.06"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M134.94 348.43H295.06"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M241.69 28.1899H81.5703V401.33H348.43V134.94L241.69 28.1899Z"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M241.69 28.1899V134.94H348.43"
                        stroke="#FFA500"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Documents PDF téléchargeables
                  </dt>
                  <dd className="inline">
                    Téléchargez des documents PDF contenant des résumés de
                    cours, des exercices supplémentaires et des guides de
                    référence.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <Image
              src={Illustration}
              alt="Illustration"
              className="w-[48rem] max-w-none rounded-xl 
        shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 
        lg:-ml-0"
            />
          </div>
        </div>
      </div>

      {/** */}

      <div className="overflow-hidden bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
            sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary">
                  {/**Remember what you did */}
                </h2>
                <p
                  className="mt-2 text-3xl font-bold tracking-tight 
                  text-color_title sm:text-4xl"
                >
                  Évaluation dynamique et <u>suivi personnalisé</u>
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Nos quiz interactifs offrent une évaluation dynamique de votre
                  compréhension, avec une variété de formats de questions pour
                  s'adapter à votre style d'apprentissage.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <MessageCircleQuestion className="absolute left-1 top-1 size-5 text-color_primary" />
                      Quiz interactifs
                    </dt>
                    <dd className="inline">
                      Les quiz sont conçus pour évaluer la compréhension des
                      concepts enseignés et fournir un feedback instantané.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <FileQuestion className="absolute left-1 top-1 size-5 text-color_primary" />
                      Diversité des formats de questions
                    </dt>
                    <dd className="inline">
                      Répondez à une variété de questions, y compris des
                      questions à choix multiples, des questions à réponse
                      courte et des questions à réponse libre.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <TrendingUp className="absolute left-1 top-1 size-5 text-color_primary" />
                      Suivi de la progression
                    </dt>
                    <dd className="inline">
                      Utilisez les notes pour suivre votre progression et
                      identifier les points forts et les points faibles.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src={Illustration}
                alt="Illustration"
                className="w-[48rem] max-w-none rounded-xl shadow-xl 
                  ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
