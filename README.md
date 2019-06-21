#### Docker 
Build:
```sh
npm install
npm run buildprod
docker build -t ang7-all-knowledge docs/docker/
```

Run:
```sh
docker run -d --name ang7-all-knowledge -it -p 80:80/tcp --privileged=true --env-file=docs/docker-conf/APP.env ang7-all-knowledge