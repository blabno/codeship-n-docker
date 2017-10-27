FROM node:4.8.4-slim
WORKDIR /app
CMD ["yarn", "start"]
ADD package.json ./
ADD yarn.lock ./
RUN yarn install
ADD . .
