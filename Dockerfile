FROM node:16-alpine
COPY . /usr/src/
WORKDIR /usr/src
RUN yarn --ignore-scripts
RUN yarn patch-package && yarn build
EXPOSE 4000
CMD [ "yarn", "start" ]