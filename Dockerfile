# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /reactservice

COPY package.json ./
RUN npm install

COPY public ./public
COPY src ./src

RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=build /reactservice/build /usr/share/nginx/html

EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]