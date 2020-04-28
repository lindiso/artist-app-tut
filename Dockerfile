FROM node:12.14.1

RUN mkdir -p /app
WORKDIR /app

COPY ./dist ./dist
COPY ./express.js ./express.js
COPY ./package.json ./package.json

RUN npm install express express-static-gzip

CMD ["node", "express"]
