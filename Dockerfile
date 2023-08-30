FROM node:18-alpine AS build

WORKDIR /app
RUN mkdir data
COPY . .

RUN npm install

RUN npm run build

#######################################

FROM node:18-alpine AS node
FROM pandoc/core:3-alpine

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /opt /opt

WORKDIR /app
RUN rm -rf ./*

COPY --from=build /app/package*.json ./
RUN npm install

COPY --from=build /app/backend/dist ./backend/dist
COPY --from=build /app/frontend/dist ./frontend/dist

EXPOSE 8080

# From node dockerfile
ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "node", "backend/dist/main.js" ]