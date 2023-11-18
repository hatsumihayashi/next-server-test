FROM node:20.9.0-slim
WORKDIR /app
COPY ./app/package.json .
RUN yarn install
COPY ./app .
CMD ["yarn", "run", "dev"]
