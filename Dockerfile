# Stage 1 - build React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy dependency manifests first for better cache use
COPY package*.json ./

# Install dependencies reproducibly
RUN npm ci

# Copy remaining source
COPY . .

# Build production bundle (Vite)
RUN npm run build


# Stage 2 - serve build with NGINX
FROM nginx:alpine

# Copy built assets to NGINX public directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
