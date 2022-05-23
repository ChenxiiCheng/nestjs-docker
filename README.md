## Nest Dockerize

### Dockerfile

```Dockerfile
FROM node:14

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/main"]
```

### .dockerignore

```Dockerfile
node_modules
npm-debug.log
```
