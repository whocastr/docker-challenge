FROM node:18.16.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app ./app
COPY db ./db

CMD ["node", "app/app.js"]
