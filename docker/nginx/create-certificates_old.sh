#!/bin/bash  

set -x

CERT_DIR=$PWD/nginx/cert/private

# Создаем директорию для сертификатов, если её нет
if [ ! -d "$CERT_DIR" ]; then
    mkdir -p "$CERT_DIR"
fi

# Проверяем, переданы ли доменные имена
if [ -z "$@" ]; then
    echo "Absent domain names. Exit"
    exit 1
fi

# Генерация сертификатов для каждого домена
for DOMAIN_NAME in "$@"; do
    # Генерация приватного ключа
    openssl genrsa -out "${CERT_DIR}/${DOMAIN_NAME}.key" 4096

    # Создание запроса на сертификат (CSR)
    openssl req -new -key "${CERT_DIR}/${DOMAIN_NAME}.key" \
        -out "${CERT_DIR}/${DOMAIN_NAME}.csr" \
        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=${DOMAIN_NAME}"

    # Генерация самоподписанного сертификата
    openssl x509 -req -days 365 \
        -in "${CERT_DIR}/${DOMAIN_NAME}.csr" \
        -signkey "${CERT_DIR}/${DOMAIN_NAME}.key" \
        -out "${CERT_DIR}/${DOMAIN_NAME}.crt"

    # Создаем PEM-файл, объединяющий сертификат и приватный ключ
    cat "${CERT_DIR}/${DOMAIN_NAME}.crt" "${CERT_DIR}/${DOMAIN_NAME}.key" > "${CERT_DIR}/${DOMAIN_NAME}.pem"
done

# Установка сертификатов в систему, если требуется
cp -r "${CERT_DIR}"/*.crt /usr/local/share/ca-certificates/
update-ca-certificates
