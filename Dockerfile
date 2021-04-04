
FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm install mongodb --save
COPY ./ /app/
RUN npm run build
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ca-frontend/ /usr/share/nginx/html/