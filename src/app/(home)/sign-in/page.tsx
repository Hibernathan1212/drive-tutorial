import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
        {/* <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-lg">
            Nathan&apos;s Drive
          </h1>
          <p className="text-lg text-neutral-400 max-w-md text-center">
            Minimal, secure, and elegant file storage for your digital life.
          </p>
        </div> */}
        <SignInButton forceRedirectUrl={"/drive"}/>
        <footer className="absolute bottom-6 text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Nathan&apos;s Drive
        </footer>
    </>
  );
}