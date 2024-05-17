import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/elements/Container";

export default function page() {
  return (
    <Container>
      <div className="">
        <div className="m-auto py-10 lg:py-28 px-2 lg:px-0 max-w-5xl flex max-lg:flex-col">
          <div className="flex-1 space-y-2 mb-4 lg:mb-0">
            <p className="font-extrabold uppercase text-color_primary">FAQ</p>
            <h3
              className="scroll-m-20 font-caption font-semibold tracking-tight 
            transition-colors text-color_title first:mt-0 text-5xl "
            >
              Questions fréquentes
            </h3>
          </div>
          <div className="flex-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Comment puis-je m'inscrire sur la plateforme ?
                </AccordionTrigger>
                <AccordionContent>
                  Cliquez sur le bouton "S'inscrire" en haut de la page
                  d'accueil, remplissez le formulaire avec vos informations et
                  suivez les instructions pour confirmer votre inscription.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quels types de cours sont disponibles ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous offrons des cours dans divers domaines techniques tels
                  que l'électricité, la mécanique, la soudure, et plus, pour
                  tous les niveaux de compétence.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Comment fonctionnent les quiz et évaluations ?
                </AccordionTrigger>
                <AccordionContent>
                  Chaque leçon comprend des quiz interactifs pour tester votre
                  compréhension, avec un feedback instantané. Des évaluations
                  plus larges sont disponibles à la fin de chaque chapitre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Puis-je accéder à la plateforme hors ligne ?
                </AccordionTrigger>
                <AccordionContent>
                  Vous pouvez télécharger des PDF des cours pour une
                  consultation hors ligne, mais les fonctionnalités interactives
                  nécessitent une connexion Internet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Comment puis-je obtenir de l'aide d'un mentor ?
                </AccordionTrigger>
                <AccordionContent>
                  Accédez à la section "Mentoring" et choisissez un mentor
                  disponible pour planifier une session de soutien ou poser des
                  questions spécifiques.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
}
