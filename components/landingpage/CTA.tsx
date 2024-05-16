import Container from "@/components/elements/Container";

export default function CTA() {
  return (
    <Container>
      <div className=" text-foreground mb-20">
        <div
          className="lg:m-auto mx-2 px-4 py-20 lg:py-28 max-w-5xl lg:flex bg-[#18181B]
          lg:items-center lg:justify-between lg:px-8 rounded-[1rem]"
        >
          <h3
            className="scroll-m-20 font-caption text-xl font-semibold text-center lg:text-left
            tracking-tight"
          >
            <span
              className="scroll-m-20 text-white font-caption text-3xl 
              font-semibold tracking-tight transition-colors first:mt-0"
            >
              Vous avez découvert une nouvelle solution d'IA ?
            </span>
            <br />
            <span className="text-gray-400 ">
              C'est le moment de partager avec nous !
            </span>
          </h3>
          <div className="mt-10 flex items-center justify-center lg:justify-end gap-x-6 lg:mt-0 lg:shrink-0">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium 
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        bg-color_primary text-white hover:bg-color_primary/90 h-11 rounded-md px-8"
            >
              Soumettez une IA
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
