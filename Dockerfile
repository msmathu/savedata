# Stage 1: Build Angular application
FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build




# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/new-docker-hello-app/browser /usr/share/nginx/html
COPY certificate.crt /etc/nginx/ssl/nginx.crt
COPY server.key /etc/nginx/ssl/nginx.key

