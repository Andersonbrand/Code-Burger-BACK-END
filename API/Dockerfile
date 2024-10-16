FROM node:latest

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["npm","run" ,"src/index.js"]

EXPOSE 5002