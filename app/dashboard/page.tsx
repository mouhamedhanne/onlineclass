"use client";

import Container from "@/components/elements/Container";
import { Button } from "@/components/ui/button";
import { Loader, LogOut } from "lucide-react";
import { signOut } from "@/lib/auth/actions";
import { useTransition } from "react";

export default function page() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(() => {
      signOut();
    });
  };

  return (
    <Container>
      <div className="mt-10 flex justify-between ">
        <h1 className="font-bold text-5xl">Bienvenu sur le Dashboard</h1>
        <form>
          <Button
            formAction={handleSignOut}
            disabled={isPending}
            className="bg-red-500 gap-2
           hover:bg-red-500/90"
          >
            {isPending ? <Loader className="animate-spin" /> : <LogOut />}
            Deconnexion
          </Button>
        </form>
      </div>
    </Container>
  );
}
