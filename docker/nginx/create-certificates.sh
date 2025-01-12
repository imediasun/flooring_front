#!/bin/bash

set -e

# Директория для хранения сертификатов (это стандартный путь для Let's Encrypt)
CERT_DIR=$PWD/nginx/cert/private

WEBROOT="/var/www/certbot"
NGINX_CONTAINER="reverse-nginx" # Замените на имя вашего контейнера Nginx
EMAIL="dev.magellan@gmail.com" # Замените на ваш действительный email

# Проверяем, переданы ли доменные имена
if [ -z "$@" ]; then
    echo "Absent domain names. Exit"
    exit 1
fi

# Убедитесь, что директория для webroot существует
if [ ! -d "$WEBROOT" ]; then
    mkdir -p "$WEBROOT"
fi

# Запускаем генерацию сертификатов для каждого домена
for DOMAIN in "$@"; do
    echo "Setting up SSL for $DOMAIN"

    # Проверяем, существует ли уже сертификат
    if [ -d "$CERT_DIR/$DOMAIN" ]; then
        echo "Certificate for $DOMAIN already exists. Skipping..."
        continue
    fi

    # Убедитесь, что Nginx настроен на обработку запросов /.well-known/acme-challenge/
    echo "Configuring Nginx for $DOMAIN"
    docker exec $NGINX_CONTAINER bash -c "
    cat > /etc/nginx/conf.d/$DOMAIN-temp.conf <<EOL
server {
    listen 80;
    server_name $DOMAIN;
    location /.well-known/acme-challenge/ {
        root $WEBROOT;
    }
}
EOL
    nginx -s reload
    "

    # Генерируем сертификат через Certbot
    docker run --rm --name certbot \
        -v "$WEBROOT":/var/www/certbot \
        -v "/etc/letsencrypt:/etc/letsencrypt" \
        certbot/certbot certonly --webroot \
        -w /var/www/certbot \
        -d "$DOMAIN" \
        --non-interactive --agree-tos -m "$EMAIL"

    # Удаляем временную конфигурацию Nginx
    echo "Removing temporary Nginx configuration for $DOMAIN"
    docker exec $NGINX_CONTAINER bash -c "
    rm -f /etc/nginx/conf.d/$DOMAIN-temp.conf
    nginx -s reload
    "
done

echo "SSL setup complete. Certificates are stored in $CERT_DIR."
