"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInwithPassword, signUpWithPassword } from "@/lib/auth/actions";
import { useState, useTransition } from "react";
import { Loader, LogIn } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function authPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const query = useSearchParams().get("query");

  const signin = query === "signin";

  const handleSignIn = (formData: FormData) => {
    startTransition(() => {
      signInwithPassword(formData).catch(() => {
        setError("Mot de passe ou email incorrect");
      });
    });
  };

  const handleSignUp = (formData: FormData) => {
    startTransition(() => {
      signUpWithPassword(formData).catch(() => {
        setError("Une erreur est survenu. Veillez reessayer.");
      });
    });
  };

  const handleSubmit = (formData: FormData) => {
    signin ? handleSignIn(formData) : handleSignUp(formData);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="mb-4 font-bold text-3xl">
        {signin ? "Connexion" : "Inscription"}
      </h2>
      <form action={handleSubmit} className="w-full md:w-2/3 lg:w-1/2">
        <fieldset
          className="grid grid-cols-1 w-full gap-4"
          disabled={isPending}
        >
          <Input
            type="email"
            name="email"
            placeholder="contact@johndoe.com"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="********"
            required
          />
          {error && <p className="my-1 text-red-500 font-medium">{error}</p>}
          <Button className="gap-2">
            {isPending ? <Loader className="animate-spin" /> : <LogIn />}
            {signin ? "Se Connecter" : "S'inscrire"}
          </Button>
        </fieldset>
      </form>
      <Link
        className="mt-6 hover:underline"
        href={signin ? "/auth?query=signup" : "/auth?query=signin"}
      >
        {signin ? "Pas de compte ?" : "Deja un compte ?"}
      </Link>
    </div>
  );
}
