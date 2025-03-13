FROM php:8.2-fpm
ARG PUID=1002
ARG PGID=1002
ARG GIT_SAFE_DIR=/var/www/btc-chess.back
WORKDIR /var/www/btc-chess.back

RUN apt-get update \
    && apt-get install -y --no-install-recommends autoconf \
       libssl-dev libpq-dev libprotobuf-dev protobuf-compiler \
       curl git apt-transport-https lsb-release build-essential software-properties-common \
       wget unzip libxml2-dev libcurl4-openssl-dev pkg-config dirmngr vim iputils-ping netcat-openbsd \
       libzip-dev cmake zlib1g-dev

RUN apt-get update -y && apt-get install -y libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev \
    libfreetype6-dev
RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev

RUN curl -o nodejs.deb https://deb.nodesource.com/node_16.x/pool/main/n/nodejs/nodejs_16.0.0-1nodesource1_amd64.deb \
    && apt-get install -y ./nodejs.deb \
    && rm nodejs.deb \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get install -y npm \
    && apt-get clean \
    && apt-get install -y python3

RUN docker-php-source extract \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && pecl install grpc \
    && docker-php-ext-enable grpc \
    && pecl install protobuf \
    && docker-php-ext-enable protobuf \
    && docker-php-ext-install pdo \
#RUN docker-php-ext-install pdo_mysql
  &&  docker-php-ext-install pdo_pgsql \
#RUN docker-php-ext-install mysqli
  && docker-php-ext-install bcmath \
  && docker-php-ext-install ctype \
  && docker-php-ext-install fileinfo \
  && docker-php-ext-install xml \
  && docker-php-ext-install sockets \
  && docker-php-ext-install pcntl \
  && echo "max_execution_time=9000" > /usr/local/etc/php/conf.d/max_execution_time.ini \
  && echo "max_input_time=9000" > /usr/local/etc/php/conf.d/max_input_time.ini \
  && echo "error_reporting=E_ALL" > /usr/local/etc/php/conf.d/error_reporting.ini \
  && echo "extension=zip.so" > /usr/local/etc/php/conf.d/docker-php-ext-zip.ini \
  && apt-get install -y libzip-dev cmake \
  && docker-php-ext-install zip \
  && docker-php-ext-configure gd \
 && docker-php-ext-install gd exif \
    && docker-php-source delete



#RUN wget https://www.mongodb.org/static/pgp/server-4.4.asc \
#    && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list \
#    && pecl install mongodb \
#    && echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/docker-php-ext-mongodb.ini

# Install PHP Protobuf module
# https://github.com/grpc/grpc/tree/master/src/php#grpc_php_plugin-protoc-plugin
RUN git clone --depth 1 https://github.com/grpc/grpc \
    && cd grpc \
    && git submodule update --init --depth=1 \
    && mkdir -p cmake/build \
    && cd cmake/build \
    && cmake ../.. \
    && make grpc_php_plugin \
    && mv ./grpc_php_plugin /usr/local/bin \
    && rm -rf /grpc

RUN groupmod -g $PGID www-data && \
    usermod -u $PUID -g www-data www-data
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN usermod -u ${PUID} www-data && groupmod -g ${PGID} www-data

# Обновите права доступа
RUN chown -R www-data:www-data /var/www/btc-chess.back
RUN chmod -R 775 /var/www/btc-chess.back
RUN git config --global --add safe.directory /var/www/btc-chess.back
#RUN git submodule update --init --recursive
#RUN composer install --no-interaction --no-plugins --no-scripts
#COPY ./docker/php-fpm/entrypoint.sh /bin/entrypoint.sh
RUN mkdir -p /etc/nginx/cert/private
COPY ./docker/nginx/cert/private/btc-chess.back.crt /etc/nginx/cert/private/btc-chess.back.crt
COPY ./docker/nginx/cert/private/btc-chess.back.key /etc/nginx/cert/private/btc-chess.back.key
RUN cat /etc/nginx/cert/private/btc-chess.back.crt /etc/nginx/cert/private/btc-chess.back.key > /etc/nginx/cert/private/cacert.pem
# Измените UID и GID пользователя www-data
RUN mkdir -p /var/www/btc-chess.back/storage
RUN mkdir -p /var/www/btc-chess.back/bootstrap/cache
COPY ./btc-chess.back/storage/* /var/www/btc-chess.back/storage
RUN chown -R www-data:www-data /var/www

RUN chown -R www-data:www-data /var/www/btc-chess.back
RUN chmod -R 775 /var/www/btc-chess.back/storage /var/www/btc-chess.back/bootstrap/cache

RUN chmod 777 /tmp
# Переключитесь на пользователя www-data

USER www-data

EXPOSE 9000

CMD ["php-fpm", "--nodaemonize"]

