### STAGE 1: Build ###
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
# COPY . .
#RUN npm run build
### STAGE 2: Run ###

FROM nginx:1.17.1-alpine
COPY ./dist .
# COPY --from=build /usr/src/app/dist/product-management /usr/share/nginx/html
COPY ./dist/product-management /usr/share/nginx/html

EXPOSE 80
## Initiate the NGINX
CMD ["nginx", "-g", "daemon off;"]