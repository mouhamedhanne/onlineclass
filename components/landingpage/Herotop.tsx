import Container from "@/components/elements/Container";
import Image from "next/image";
import Illustratiom from "@/public/images/illustration-hero.png";

export default function page() {
  return (
    <Container>
      <div className="mt-16 ">
        <div className="flex justify-between items-start">
          <div className="mt-5">
            <div className="flex items-center space-x-3">
              <div className="border rounded-full px-6 py-2">
                OnlineClass 1.0 à venir!
              </div>
              <div className="border rounded-full px-6 py-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <div className="text-black font-medium pl-2">4/5</div>
                </div>
              </div>
            </div>
            {/**Customer support
headaches eliminated
 */}
            <h1 className="font-extrabold text-6xl text-[#1E293B] leading-[4.5rem] mt-5">
              Réinventez Votre
              <br />
              Apprentissage Tech..
            </h1>
            <p className="mt-5 text-[20px]">
              Découvrez une nouvelle façon d'apprendre l'enseignement technique
              <br />
              grâce à OnlineClass. Accédez à un contenu de qualité, des outils
              <br />
              interactifs pour réussir dans votre parcours éducatif.
            </p>
            <div className="mt-7 flex items-center space-x-4">
              <button
                className="px-8 py-2 border-none bg-color_primary hover:bg-color_primary/90
               text-white rounded-full font-bold"
              >
                Commencer gratuitement
              </button>
              <button className="underline">Voir la démo</button>
            </div>
          </div>
          <div>
            <Image src={Illustratiom} alt="illustration" width={500} />
          </div>
        </div>
      </div>
    </Container>
  );
}
