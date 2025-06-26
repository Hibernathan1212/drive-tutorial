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
- [ ] file control (deleting, renaming etc)
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
