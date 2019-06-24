#!/bin/bash
PATH=~/projetos/all-knowledge/

function reset() {
    echo "Removendo imagens anteriores..."

    echo "... Removendo node_modules"
    rm -rf ${PATH}/node_modules/

    echo "... Removendo package-lock.json"
    rm -rf ${PATH}/package-lock.json

    echo "... Removendo dist"
    rm -rf ${PATH}/docs/docker/dist

    echo "... Removendo container all-knowledge"
    docker rm --force /all-knowledge

    echo "SUCCESS RESET"
}

function deploy() {
    echo "Deployando a aplicacao..."

    echo "npm install"
    npm install

    echo "npm run buildprod"
    npm run buildprod

    echo "... Realizando o build no docker: docker build -t all-knowledge docs/docker/ "
    docker build -t all-knowledge ${PATH}/docs/docker/

    echo "... subindo container build no docker: docker run -d --name all-knowledge -it -p 80:80/tcp --privileged=true --env-file=docs/docker-conf/APP.env all-knowledge"
    docker run -d --name all-knowledge -it -p 80:80/tcp --privileged=true --env-file=${PATH}/docs/docker-conf/APP.env all-knowledge

    echo "SUCCESS BUILD"
}

reset
deploy