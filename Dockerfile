FROM node:16-alpine
LABEL author="megabee <truongvanty1608@gmail.com>"


WORKDIR /app

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .
RUN yarn build

COPY .next ./

EXPOSE 3000

CMD ["yarn", "start"]
