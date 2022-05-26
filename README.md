# Introduction
This exam is a clone of the official NuWorks website (https://nuworks.ph/).
Techstack used on this is ReactJS.
Styling and other javascript functionality are copied from the orignal site. This is to focus the development on the ReactJS.
All sections on the page are built using components and combined them into the page.

# How to run locally
In the root directory we can run this by typing `npm start` in the console but before doing it you need to install the dependencies.
To install the dependencies we can run `npm install` in the root directory.

# How to build
In the root directory using terminal we just need to type `npm run build`.
All build files will be placed inside the /build folder.
These are the files that we will upload to the server.
# How to deploy
To deploy, just copy the files from the `/build` directory and place it in your server.
We can test it in a local server by install this node package http-server.
To install it, we just need to type `npm install http-server -g` in the terminal (make sure you have NodeJS installed in your local machine - https://nodejs.org/en/download/).

After we install it, in the terminal we navigate where the files are located and then we can type `http-server .`
This will produce this kind of links
  http://192.168.0.106:8080
  http://127.0.0.1:8080

We can choose this http://127.0.0.1:8080 and enter it in the browser URL input field.

# Updates
- Component implementation
- Local JSON data for the listings
- Routing (home, privacy policy and terms & condition)
- Style grouping based on component
- Removed jquery scripts and converted to native JS

# Limitations
- Dynamic tabs are static and functionality is not implemented (List of service)
- Dynamic select dropdown are static, functionality is not implemented (Our works)
- These pages are not implemented (/lets-connect, /join-the-team)
- We cannot run the files directly from the /build directory and access the index.html. Routing will not work and it will work only if we will
upload this in a live server or development server.
- Redux is not yet implemented

# Used git tags
- `git branch` - used to create sepeate branches per feature
- `git tag` - used to add a tag
- `git push` - used to push changes to the repository URL
- `git merge` - used to merge feature/development branches