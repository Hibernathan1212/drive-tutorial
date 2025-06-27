import { Button } from "~/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <SignInButton forceRedirectUrl={"/drive"}>
        <Button className="rounded-full px-8 py-4 bg-white text-black font-semibold shadow-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        Sign In
        </Button>
      </SignInButton>
      <footer className="absolute bottom-6 w-full text-center text-xs text-neutral-600">
      &copy; {new Date().getFullYear()} Nathan&apos;s Drive
      </footer>
    </>
  );
}