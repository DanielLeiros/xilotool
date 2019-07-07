FROM node:11-alpine

COPY package.json package-lock.json ./

RUN npm ci && mkdir /react-app && mv ./node_modules ./react-app

WORKDIR /react-app

COPY . .
