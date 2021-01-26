FROM node:12
WORKDIR /src/app
COPY package.json /src/app
RUN npm install --silent
COPY . /src/app
EXPOSE 8080
CMD ["node", "server"]