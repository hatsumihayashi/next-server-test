FROM node:20.9.0-slim
WORKDIR /src
COPY ./src/package.json ./src/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./src .
CMD ["yarn", "dev"]
