import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "~/components/ui/submit-button"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-lg">
          Nathan&apos;s Drive
        </h1>
        <p className="text-lg text-neutral-400 max-w-md text-center">
          Simple file storage made by Nathan
        </p>
      </div>
      
      <form action={async () => {
        "use server";
        const session = await auth();
        if (!session.userId) {
          return redirect("/sign-in");
        } 
        return redirect("/drive");
      }}>
        <SubmitButton />
      </form>
      
      <footer className="absolute bottom-6 text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Nathan&apos;s Drive
      </footer>
    </>
  );
}