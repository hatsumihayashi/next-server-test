FROM node:20.9.0-slim
COPY ./package.json ./yarn.lock /
RUN yarn install --frozen-lockfile
COPY ./src /src
CMD ["yarn", "dev"]
