FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/react
COPY ["./waferfrontend/package.json", "./waferfrontend/package-lock.json*","./"]
RUN npm install react-scripts && mv node_modules ./
RUN npm install -g npm@9.1.3
COPY ./waferfrontend .
EXPOSE 3000
RUN chown -R node /usr/src/react
USER node
# COPY entrypoint.sh /entrypoint.sh


