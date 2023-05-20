# Build stage
# ---------------------------------------
FROM --platform=linux/amd64 node:18.12.1-alpine AS build
WORKDIR /node
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM  --platform=linux/amd64 node:18.12.1-alpine
WORKDIR /node
COPY package.json .
RUN npm install
COPY --from=build /node/dist ./dist
CMD npm run start:prod