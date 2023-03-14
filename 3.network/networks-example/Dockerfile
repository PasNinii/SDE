FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

VOLUME ["/app/node_modules"]

EXPOSE 3000

CMD ["node", "app.js"]
