FROM node:7.4-alpine

RUN mkdir /usr/local/client
WORKDIR /usr/local/client
COPY . /usr/local/client
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start-prod"]