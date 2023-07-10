#Build Stage

FROM node:20.2.0-alpine as build_stage

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#Production Stage

FROM nginx:1.25-alpine as production_stage

COPY --from=build_stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
