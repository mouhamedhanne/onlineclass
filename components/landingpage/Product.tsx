import Image from "next/image";
import Illustration from "@/public/images/illustration-dashboard.png";

export default function Product() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
         sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Daily note taking
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Create daily note <u>without efforts</u>
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                You just speak about your day, we handle the rest and challenges
                your responses.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Take daily notes
                  </dt>
                  <dd className="inline">
                    Our application remind you to take a daily note to keep
                    track of your progress.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Auto-generated weekly and monthly summary
                  </dt>
                  <dd className="inline">
                    Every week, we generate a summary of your notes to help you
                    track your progress.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    The AI ask you questions about your day
                  </dt>
                  <dd className="inline">
                    We use your configuration to never forget to ask you the
                    right questions.
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
                  Remember what you did
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Create daily note <u>without efforts</u>
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  You just speak about your day, we handle the rest and
                  challenges your responses.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Take daily notes
                    </dt>
                    <dd className="inline">
                      Our application remind you to take a daily note to keep
                      track of your progress.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Auto-generated weekly and monthly summary
                    </dt>
                    <dd className="inline">
                      Every week, we generate a summary of your notes to help
                      you track your progress.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-code absolute left-1 top-1 size-5 text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      The AI ask you questions about your day
                    </dt>
                    <dd className="inline">
                      We use your configuration to never forget to ask you the
                      right questions.
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
