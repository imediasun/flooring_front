FROM debian:experimental as base

ENV DEBIAN_FRONTEND="noninteractive"

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
        nginx rsyslog wget curl nano \
    && rm -rf /var/lib/apt/lists/* /usr/share/man/* /usr/share/doc/* \
    && rm -rf /etc/nginx/sites-enabled

RUN rm -rf /etc/nginx/sites-available/default
RUN rm -rf /etc/nginx/sites-enabled/default

RUN useradd -m -u 1000 www \
    && sed -i 's/www-data/www/g' /etc/nginx/nginx.conf

RUN mkdir /etc/nginx/cert

RUN chmod -R 600 /etc/nginx/cert
COPY ./docker/nginx/cert/private/* /etc/nginx/cert
RUN chown root:root /etc/nginx/cert/*



EXPOSE 80

COPY ./docker/nginx/entrypoint.sh /

CMD ["/bin/bash", "/entrypoint.sh"]
