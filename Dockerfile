FROM node:alpine

WORKDIR /usr/src/index
COPY package.json .
RUN yarn 

EXPOSE 8080
CMD [ "yarn", "start" ]

COPY . .