import { cn } from "@/lib/utils";
import { Footer } from "@/modules/home/footer";
import { Header } from "@/modules/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Crown Code - %s",
    default: "Code Editor",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />


      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:42px_42px]",
          "[background-image:linear-gradient(to_right,rgba(161,161,170,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.18)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(63,63,70,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.55)_1px,transparent_1px)]",
        )}
      />

      
      <div
        className="
          pointer-events-none absolute inset-0
          bg-background
          [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black)]
          -z-10
        "
      />

      <main className="relative z-20 w-full">{children}</main>

      <Footer />
    </>
  );
}
