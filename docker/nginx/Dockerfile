FROM debian:experimental as base

ENV DEBIAN_FRONTEND="noninteractive"

# Установка зависимостей
RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
        nginx rsyslog wget curl nano \
    && rm -rf /var/lib/apt/lists/* /usr/share/man/* /usr/share/doc/*

# Удаление стандартных конфигураций Nginx
RUN rm -rf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Создание пользователя для работы Nginx
RUN useradd -m -u 1000 www \
    && sed -i 's/www-data/www/g' /etc/nginx/nginx.conf

# Создание каталога для сертификатов
RUN mkdir -p /etc/nginx/cert \
    && chmod -R 600 /etc/nginx/cert

# Копирование сертификатов
COPY ./docker/nginx/cert/private/* /etc/nginx/cert
RUN chown root:root /etc/nginx/cert/*

# Создание каталога для временного webroot
RUN mkdir -p /var/www/certbot/.well-known/acme-challenge \
    && chown -R www:www /var/www/certbot

# Установка прав на временный каталог
RUN chmod -R 755 /var/www/certbot

# Экспорт порта 80
EXPOSE 80

# Копирование файла entrypoint
COPY ./docker/nginx/entrypoint.sh /

# Запуск контейнера с entrypoint
CMD ["/bin/bash", "/entrypoint.sh"]
