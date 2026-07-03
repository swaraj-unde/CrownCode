import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-12">
      <Image
        src="/hero.svg"
        alt="Hero Section"
        width={200}
        height={200}
        priority
        className="select-none"
      />

      <h1 className="mt-12 max-w-5xl text-center text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Code Faster
        <br />
        <span className="text-zinc-500 dark:text-zinc-400">
          Build Smarter with{" "}
        </span>
        <span className="text-amber-400">Intelligence</span>
      </h1>

      <p className="mt-8 max-w-3xl text-center text-lg leading-8 text-muted-foreground">
        Crown Code combines the speed of a modern developer environment with
        intelligent AI assistance, helping you write, debug, refactor, and ship
        production-ready code with confidence.
      </p>

      <div className="mt-12 flex items-center gap-4">
        <Link href="/dashboard">
          <Button size="lg" variant="brand" className="group px-8 text-base">
            Get Started
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
