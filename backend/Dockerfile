FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]