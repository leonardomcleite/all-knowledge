#!/bin/bash

function config() {
  echo "# Configurando ssh git"
  echo

  echo "eval "$(ssh-agent -s)"  "
  echo "ssh-add ~/.ssh/all-knowledge"

  eval "$(ssh-agent -s)"  
  ssh-add ~/.ssh/all-knowledge

  echo
  echo "SUCCESS CONFIG"
}

config