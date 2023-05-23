FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app ./app
COPY db ./db

CMD ["node", "app/server.js"]
