# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /msinit-frontend

COPY package.json package-lock.json* ./
RUN npm install

COPY public ./public
COPY src ./src
COPY index.html ./index.html
COPY vite.config.js ./vite.config.js
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=builder /msinit-frontend/dist /usr/share/nginx/html

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]