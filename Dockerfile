FROM node:20.9.0-slim
WORKDIR /src
COPY ./src/package.json .
RUN yarn install
COPY ./src .
CMD ["yarn", "run", "dev"]
