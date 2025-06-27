# Drive
A personal drive following [Theo's Drive Tutorial](https://www.youtube.com/watch?v=c-hKSbzooAg). 

Learning proper backend and frontend conventions, auth, properly learning react, and more. 

## Technologies
- Framework: NextJS
- Hosting: Netlify
- Database: Singlestore w Drizzle
- File storage: Uploadthing
- Auth: Clerk
- Analytics: Posthog

## TODO
- [x] Folder filtering
- [x] Make folders onclick work
- [x] breadcrumbs
- [ ] homepage

- [x] Auth
- [x] file uploading
- [x] file deletion
- [x] Analytics

## Features
- added databse
- Connected database to frontend with rendering
- Added folder filtering with url routes
- Added incomplete home page
- Cleaned up database and data fetching patterns
- Auth with Clerk (though stil development mode)
- file uploading with uploadthing
- ownership to files, only can upload to folders you own
- uploads to right folder
- Allow all file types
- connected posthog
- reverse proxy for posthog to bypass ad blocking (netlify specific in netlify.toml file)
- File sorting by id (when it was created)
- deleting files
- onboarding with signing in and sign up pages
- creates new drive if user doesn't already have on


## Todo
- add file types into frontend
- make ui nicer
    - loading states
    - toasts for file upload
    - gray out files as theyre being deleted
    - nicer onboarding
    - nicer ui overall
- deleting folders
    - get all children, recursively for subfolders and all files then delete
- add folders
    - make server action that takes name and parentId and ownerID and creates folder
- renaming
- access control
    - do an additional check in /f/../page if you are owner of folder and if not redirect
- file view page
    - page that shows the file and renders, not just the url of the file but actual ui showing the file
- add uploadthing file id to database
