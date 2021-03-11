# site
The web site for @omni-door

## Develop
### Install dependencies
```sh
yarn
```

### Start Dev-Server
```sh
yarn dev
```

## Build
```sh
yarn build
```

## Release
```sh
yarn release
```

## Linux Deploy Process
### install dependencies
```sh
sudu su &&\
apt-get update &&\
apt-get install nodejs &&\
apt-get install npm &&\
apt-get install nginx &&\
npm i -g yarn &&\
npm i -g pm2 &&\
npm i -g @omni-door/cli &&\
mkdir /home/ubuntu/www/omni-door &&\
```

### crt and key
```sh
nginx -s stop &&\
apt-get install socat && curl  https://get.acme.sh | sh &&\
~/.acme.sh/acme.sh --issue -d www.omnidoor.org --standalone -k ec-256 &&\
~/.acme.sh/acme.sh --installcert -d www.omnidoor.org --fullchainpath /home/ubuntu/www/omnidoor.crt --keypath /home/ubuntu/www/omnidoor.key --ecc &&\
nginx &&\
```

### ngnix config
```conf
server {
	listen       80;
	server_name  omnidoor.org www.omnidoor.org m.omnidoor.org;
	rewrite ^(.*)$ https://${server_name}$1 permanent; 
}
server {
	listen  443 ssl;
	ssl_certificate       /home/ubuntu/www/omnidoor.crt;
	ssl_certificate_key   /home/ubuntu/www/omnidoor.key;
	ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
	ssl_ciphers           HIGH:!aNULL:!MD5;
	server_name           omnidoor.org www.omnidoor.org m.omnidoor.org;
	location / {
		proxy_redirect off;
		proxy_pass http://0.0.0.0:6600;
		proxy_http_version 1.1;
		proxy_set_header Host $http_host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}
```

### deploy and publish
#### login server
```sh
cd /home/ubuntu/www/omni-door/source && yarn
```

#### in project
```sh
yarn setup && yarn release
```