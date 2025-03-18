FROM php:8.2-fpm

ARG PUID=1002
ARG PGID=1002
ARG GIT_SAFE_DIR=/var/www/btc-chess.back

WORKDIR /var/www/btc-chess.back

# Установка необходимых пакетов за один шаг для кеширования
RUN apt-get update && apt-get install -y --no-install-recommends \
    autoconf libssl-dev libpq-dev \
    curl git apt-transport-https lsb-release build-essential \
    wget unzip libxml2-dev libcurl4-openssl-dev pkg-config \
    libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev \
    libfreetype6-dev libzip-dev cmake zlib1g-dev python3 npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Установка расширений PHP
RUN docker-php-source extract \
    && pecl install xdebug redis \
    && docker-php-ext-enable xdebug redis \
    && docker-php-ext-install pdo pdo_pgsql bcmath ctype fileinfo xml sockets pcntl zip gd exif \
    && docker-php-source delete

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Установка Node.js (установка через apt, чтобы избежать кеширования большого пакета)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Настройки пользователя
RUN groupmod -g $PGID www-data && \
    usermod -u $PUID -g www-data www-data

# Создаём папки, если они отсутствуют
RUN mkdir -p /var/www/btc-chess.back/storage /var/www/btc-chess.back/bootstrap/cache \
    && chmod -R 775 /var/www/btc-chess.back/storage /var/www/btc-chess.back/bootstrap/cache

# Права доступа
RUN chown -R www-data:www-data /var/www/btc-chess.back
RUN chmod -R 775 /var/www/btc-chess.back/storage /var/www/btc-chess.back/bootstrap/cache

# Переход на пользователя www-data
USER www-data

EXPOSE 9000

CMD ["php-fpm", "--nodaemonize"]
