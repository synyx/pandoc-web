FROM node:26.12.1-alpine AS build

WORKDIR /app
RUN mkdir data
COPY . .

RUN npm install --global corepack@latest \
    && corepack enable pnpm \
    && pnpm fetch --yes \
    && pnpm build \
    && pnpm fetch --yes --prod

#######################################

FROM node:26.12.1-alpine AS node
FROM nginx:1.31.7-alpine-slim

COPY --from=build /app/dist/ /usr/share/nginx/html/
