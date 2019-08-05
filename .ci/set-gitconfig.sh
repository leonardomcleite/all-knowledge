#!/bin/bash

function config() {
    echo "# Configurando ssh git"
    echo

    eval "$(ssh-agent -s)"
	  ssh-add ~/.ssh/all-knowledge

    echo
    echo "SUCCESS CONFIG"
}

config