FROM node:14

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
RUN npm run server