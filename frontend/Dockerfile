FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn
RUN yarn global add react-scripts

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
