# All Knowledge (Todo Conhecimento) - Criar Servidor Google Cloud e Servir o Projeto

<p style="margin: 0">
    <b style="color: red">[ID do projeto]: </b>
    <span style="color: blue">all-knowledge</span>
</p>
<p style="margin: 0">
    <b style="color: red">[NOME do servidor]: </b>
    <span style="color: blue">servidor-all-knowledge</span>
</p>
<p style="margin: 0">
    <b style="color: red">[USUARIO]: </b>
    <span style="color: blue">leonardo</span>
</p>
<p style="margin: 0">
    <b style="color: red">[USUARIO servidor]: </b>
    <span style="color: blue">leonardo</span>
</p>
<p style="margin: 0">
    <b style="color: red">[IP externo servidor cloud]: </b>
    <span style="color: blue">35.199.115.251</span>
</p>


### Instalando Google Cloud SDK
```sh
	sudo apt-get update -y
	sudo apt-get install python2.7 -y

	curl https://sdk.cloud.google.com | bash
	exec -l $SHELL
	
	gcloud components update --version 186.0.0
```
### Criando Servidor
```sh
	gcloud auth login
	gcloud config set project "[ID do projeto]"
	gcloud compute instances create "[NOME do servidor]" --image-family=ubuntu-1604-lts --image-project=ubuntu-os-cloud --zone southamerica-east1-a
```

### Acessando servidor no PC que vai acessar o servidor

- Criar chave SSH
```sh
	ssh-keygen -f ~/.ssh/"[ID do projeto]" -t rsa -C "[USUARIO]"
	ssh-add ~/.ssh/"[ID do projeto]"
	OBS: O terminal irá perdir uma senha e a confirmação
```

- Pegar chave publica para por no Cloud
```sh
	cat .ssh/"[ID do projeto]".pub
```

- Instalar servidor SSH (Instalar SSH SERVER)
```sh
	sudo apt-get install openssh-server
```

- Acessando servidor Cloud
```sh
	sudo service ssh start
	ssh "[USUARIO servidor]"@"[IP externo servidor cloud]"
	OBS: com este comando voce ja esta no servidor
```

### Configurando servidor

- Criar chave SSH
```sh
	ssh-keygen -f ~/.ssh/"[ID do projeto]" -t rsa -C "[USUARIO]"
	ssh-add ~/.ssh/"[ID do projeto]"
	OBS: O terminal irá perdir uma senha e a confirmação
```

- Criando pasta dos projetos
```sh	
	mkdir projetos
	cd projetos
```

- Pegar chave publica para por no Git
```sh	
	cat .ssh/"[ID do projeto]".pub

- Baixando projeto
```sh
	cd projetos
	git clone git@github.com:leonardomcleite/"[ID do projeto]".git
	git pull
```

- Instalar docker (Arquivo está no projeto na pasta docs/docker/install-docker.sh)
```sh	
	cd "[ID do projeto]"/docs/docker
	./install-docker.sh
```

- Buildar projeto
```sh	
	cd "[ID do projeto]"/.ci
	./build.sh
```

PRONTO AGORA É SÓ ACESSAR O SITE EM: "[IP do Servidor]":80/"[ID do projeto]"
