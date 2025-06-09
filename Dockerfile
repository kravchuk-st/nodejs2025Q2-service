ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-alpine3.21 AS development

RUN apk update && apk upgrade && \
    apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "start:docker"]
