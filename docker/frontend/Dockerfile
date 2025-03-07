FROM node:20.0.0-alpine
#dev
COPY ./admin_magellan /app

WORKDIR /app
COPY ./admin_magellan/package*.json ./

RUN yarn install && yarn cache clean

COPY ./admin_magellan /app
EXPOSE 8080

WORKDIR /var/www/admin_magellan

CMD ["yarn", "run", "start"]

