#### Docker 
Build:
```sh
npm install
npm run buildprod
docker build -t consorcio-front docs/docker/
```

Run:
```sh
docker run -d --name consorcio-front -it -p 80:80/tcp --privileged=true --env-file=docs/docker-conf/APP.env consorcio-front