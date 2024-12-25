FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY public ./public
COPY tsconfig.json next.config.mjs next-env.d.ts next.config.js postcss.config.mjs postcss.config.js tailwind.config.ts tailwind.config.js ./

CMD ["yarn", "dev"]