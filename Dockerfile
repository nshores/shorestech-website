# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.cjs .
COPY package.json .
RUN npm install --production
EXPOSE 3000
CMD ["node", "server.cjs"] 