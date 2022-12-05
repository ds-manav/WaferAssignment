FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["./WaferAssesment/package.json", "./WaferAssesment/package-lock.json*","./"]
RUN npm install  && mv node_modules ./
RUN npm install -g npm@9.1.3
COPY ./WaferAssesment ./
EXPOSE 8000
RUN chown -R node /usr/src/app
USER node

# COPY entrypoint.sh /entrypoint.sh


