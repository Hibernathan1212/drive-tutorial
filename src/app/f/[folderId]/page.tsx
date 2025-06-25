import DriveContents from "../../drive-contents";
import { getFiles, getFolders, getAllParentsForFolder } from "~/server/db/queries";


export default async function GoogleDriveClone(props: {
    params: Promise<{ folderId: string }>;
}) {
  const params = await props.params; //marks the rest as dynamic content

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid Folder ID</div>;
  }

  console.log(parsedFolderId);

  const filesPromise = getFiles(parsedFolderId);
  const foldersPromise = getFolders(parsedFolderId);
  const parentsPromise = getAllParentsForFolder(parsedFolderId);

  const [folders, files, parents] = await Promise.all([foldersPromise, filesPromise, parentsPromise]);

  return <DriveContents files={files} folders={folders} parents={parents}/>
}

