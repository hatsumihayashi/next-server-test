FROM node:20.9.0-slim
COPY ./package.json ./yarn.lock /

WORKDIR /src
RUN yarn install --frozen-lockfile
COPY ./src .
CMD ["yarn", "dev"]
