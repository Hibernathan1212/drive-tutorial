"use client";

import { useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";

export function CreateDriveButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
          Creating Your Drive...
        </div>
      ) : (
        "Create Your Drive"
      )}
    </Button>
  );
}