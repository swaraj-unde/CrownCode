import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Code } from "lucide-react";
import { signIn } from "@/auth";

async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-950 text-white shadow-2xl shadow-black/70 ">
      <CardHeader className="space-y-2">
        <CardTitle className="text-center text-3xl font-bold tracking-tight text-white">
          Sign In
        </CardTitle>

        <CardDescription className="text-center text-zinc-400">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            variant="outline"
            className="w-full border-zinc-800 bg-zinc-900 text-white hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-400 transition-all duration-200"
          >
            <Globe className="mr-2 h-4 w-4" />
            <span>Sign in with Google</span>
          </Button>
        </form>

        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant="outline"
            className="mb-8 w-full border-zinc-800 bg-zinc-900 text-white hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-400 transition-all duration-200"
          >
            <Code className="mr-2 h-4 w-4" />
            <span>Sign in with GitHub</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInFormClient;
