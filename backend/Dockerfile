from node:22-alpine

Workdir /app

copy package.json ./

run npm install --production

copy . .

expose 5000

cmd ["npm", "start"]