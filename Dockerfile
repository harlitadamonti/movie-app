FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -G nodemon

COPY . .

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "run", "dev"]