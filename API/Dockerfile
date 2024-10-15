FROM node:latest

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN yarn install --production

CMD ["yarn", "dev"]

EXPOSE 3001