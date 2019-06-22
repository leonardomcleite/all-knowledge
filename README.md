#### Docker 
Build:
```sh
npm install
npm run buildprod
docker build -t all-knowledge docs/docker/
```

Run:
```sh
docker run -d --name all-knowledge -it -p 80:80/tcp --privileged=true --env-file=docs/docker-conf/APP.env all-knowledge