#!/bin/bash  

set -x

if [ ! -d $PWD/docker/nginx/cert/private ]; then
    mkdir -p $PWD/docker/nginx/cert/private
fi

if [ -z $@ ]; then
    echo "Absent domain names. Exit"
    exit 1
fi

for DOMAIN_NAME in $@; do
openssl req -new -newkey rsa:4096 -nodes \
        -keyout $PWD/nginx/cert/private/${DOMAIN_NAME}.key \
        -out $PWD/nginx/cert/private/${DOMAIN_NAME}.csr \
        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=${DOMAIN_NAME}" \
    && openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=${DOMAIN_NAME}" \
        -keyout $PWD/nginx/cert/private/${DOMAIN_NAME}.key \
        -out $PWD/nginx/cert/private/${DOMAIN_NAME}.crt
done

cp -r $PWD/nginx/cert/private/*.crt /usr/local/share/ca-certificates/
update-ca-certificates