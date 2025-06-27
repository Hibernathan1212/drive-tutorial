"use client";

import { useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      size="lg"
      type="submit"
      disabled={pending}
      className="rounded-full px-8 py-4 bg-white text-black font-semibold shadow-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        "Get Started"
      )}
    </Button>
  );
}