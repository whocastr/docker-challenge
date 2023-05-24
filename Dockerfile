FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app ./app
COPY db ./db

CMD ["node", "app/app.js"]
