npx create-vite@latest client --template react
Move-Item -Path "client\*" -Destination "." -Force
Remove-Item -Recurse -Force "client"
npm install
npm install sass
npm install react-router-dom
npm install react-icons
npm run dev