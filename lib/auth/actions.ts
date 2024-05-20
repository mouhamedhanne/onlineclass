"use server";

import { createActionServer } from "@/lib/supabase/actions";
import { redirect } from "next/navigation";

export const signInwithPassword = async (data: FormData) => {
  const supabase = await createActionServer();
  const { error } = await supabase.auth.signInWithPassword({
    email: data.get("email") as string,
    password: data.get("password") as string,
  });

  if (error) {
    throw error;
  }
  redirect("/dashboard");
};

export const signUpWithPassword = async (data: FormData) => {
  const supabase = await createActionServer();
  const { error } = await supabase.auth.signUp({
    email: data.get("email") as string,
    password: data.get("password") as string,
  });

  if (error) {
    throw error;
  }

  redirect("/auth/confirmation");
};

export const signOut = async () => {
  const supabase = await createActionServer();
  await supabase.auth.signOut();
  redirect("/");
};
