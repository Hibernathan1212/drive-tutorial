import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MUTATIONS, QUERIES } from "~/server/db/queries";
import { CreateDriveButton } from "~/components/ui/create-drive-button";

export default async function DrivePage() {
  const session = await auth();

  if (!session.userId) {
    return redirect("/sign-in");
  }

  const rootFolder = await QUERIES.getRootFolderForUser(session.userId);

  if (!rootFolder) {
    return (
      <form action={async () => {
        "use server";

        const session = await auth();

        if (!session.userId) {
          return redirect("/sign-in");
        }

        const rootFolderId = await MUTATIONS.onboardUser(session.userId);

        return redirect(`/f/${rootFolderId}`);
      }}>
        <CreateDriveButton />
      </form>
    )
  }

  return redirect(`/f/${rootFolder.id}`);
}