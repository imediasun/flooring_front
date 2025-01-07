# Используем более новый образ Go (версия 1.21)
FROM golang:1.23

# Аргумент для передачи GitHub токена
ARG GITHUB_TOKEN
ENV GOPRIVATE=github.com/imediasun/*
ENV GOPROXY=direct
ENV SERVICE_NAME="onboardingsvc"
ENV API_PROTO_PATH_DIST="./gen/api"
ENV GONOSUMDB=github.com/imediasun/*
ENV GOPROXY=https://proxy.golang.org,direct
ENV GIT_CURL_VERBOSE=1
ENV GIT_TRACE=1
ENV GODEBUG="http2client=0"


# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем необходимые пакеты
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    build-essential \
    libssl-dev \
    libcurl4-openssl-dev \
    zlib1g-dev \
    libexpat1-dev \
    gettext \
    wget

# Устанавливаем git с OpenSSL
RUN apt-get remove -y git \
    && wget https://github.com/git/git/archive/v2.42.0.tar.gz -O git.tar.gz \
    && tar -xzvf git.tar.gz \
    && cd git-2.42.0 \
    && make prefix=/usr/local all \
    && make prefix=/usr/local install \
    && cd .. \
    && rm -rf git-2.42.0 git.tar.gz
# Настраиваем Git для использования токена для аутентификации
RUN git config --global url."https://${GITHUB_TOKEN}:@github.com/".insteadOf "https://github.com/"
RUN git ls-remote https://github.com/imediasun/corelib.git

# Копируем исходные файлы приложения
COPY ./onboardingservice ./

RUN VERSION=$(git describe --tags --always) && \
    echo "Version: $VERSION" && \
    echo $VERSION > VERSION.txt

#ENV VERSION=$(cat VERSION.txt)
#USER root
RUN chmod -R 777 /app

#RUN git submodule update --init --recursive
# Удаление старой директории, если существует, и создание новой
#RUN rm -rf /app/gen

# Создаем директорию для сгенерированных файлов перед вызовом protoc
#RUN mkdir -p ${API_PROTO_PATH_DIST}
#RUN mkdir -p ./gen/api/mediamanagmentservice/media/v1

# Скачиваем модули Go
#RUN go mod download -mod=mod

# Установка protoc (Protobuf компилятор)
#RUN apt-get update && apt-get install -y protobuf-compiler gettext wget

# Установка yq
#RUN wget https://github.com/mikefarah/yq/releases/download/v4.16.1/yq_linux_amd64 -O /usr/bin/yq && \
#    chmod +x /usr/bin/yq

# Установка плагинов для генерации Go-классов из .proto файлов
#RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.32.0 \
#    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0 \
#    && go install github.com/go-kratos/kratos/cmd/protoc-gen-go-errors/v2@v2.0.0-20240119085030-a556a2b53120 \
#    && go install github.com/go-kratos/kratos/cmd/protoc-gen-go-http/v2@v2.0.0-20240119085030-a556a2b53120 \
#    && go install github.com/envoyproxy/protoc-gen-validate@v1.0.4 \
#    && go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@v1.5.1 \
#    && go install github.com/google/gnostic/cmd/protoc-gen-openapi@v0.7.0 \
#    && go install go.uber.org/mock/mockgen@v0.4.0 \
#    && go install github.com/yoheimuta/protolint/cmd/protolint@latest



# Убедиться, что файл ai-service.proto действительно существует


# Устанавливаем зависимости Go
#
#RUN INTERNAL_PROTO_FILES=$(find internal -name "*.proto") && \
#    protoc \
#    	--proto_path=./internal \
#    	--go_out=paths=source_relative:./internal \
#    	${INTERNAL_PROTO_FILES}
#
#RUN mkdir -p /app/gen/api/errors
#
#RUN ls -la ./proto/src/errors
#
#RUN API_PROTO_FILES=$(find ./proto/src/onboardingservice -name "*.proto" -o -path ./proto/src/errors -name "*.proto") && \
#    protoc \
#    		--proto_path=./proto/src \
#    		--proto_path=./proto/third_party \
#    		--go_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-grpc_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-http_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-errors_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--validate_out=paths=source_relative,lang=go:${API_PROTO_PATH_DIST} \
#    		--doc_out=./internal/docs \
#    		--doc_opt=html,proto.html \
#    		--experimental_allow_proto3_optional \
#    		--openapi_out=naming=proto,fq_schema_naming=true,title=${SERVICE_NAME}:./internal/docs \
#    		${API_PROTO_FILES}
#
#RUN ./scripts/openapi_fix.sh internal/docs/openapi.yaml
#
#RUN SERVICES_PROTO_FILES=$(find ./proto/src/mediamanagmentservice -name "*.proto") && \
#        echo "Found proto files: $SERVICES_PROTO_FILES" && \
#        protoc \
#          --proto_path=./internal \
#    		--proto_path=./proto/src \
#    		--proto_path=./proto/third_party \
#    		--go_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-grpc_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-http_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--go-errors_out=paths=source_relative:${API_PROTO_PATH_DIST} \
#    		--validate_out=paths=source_relative,lang=go:${API_PROTO_PATH_DIST} \
#    		--experimental_allow_proto3_optional \
#    		${SERVICES_PROTO_FILES}


#RUN ls -la /app
#RUN ls -la /app/gen
#RUN ls -la /app/gen/api/onboardingservice/users/v1
#RUN ls -la /app/gen/api/errors

RUN git config --global http.sslVerify false
RUN go clean -modcache && go mod tidy
RUN go mod download
RUN go mod vendor

RUN go install github.com/google/wire/cmd/wire@v0.6.0
# Проверка сгенерированных файлов
#RUN echo "Generated files:" && ls -la /app/gen

RUN cd /app && wire gen ./...
#./cmd/...
#RUN rm -f ./cmd/service/wire_gen.go


#RUN ls -la /app/cmd/service
#RUN cat /app/cmd/service/wire_gen.go
#RUN ls -la ./cmd/service
#RUN cat ./cmd/service/wire_gen.go


# Собираем приложение
RUN CGO_ENABLED=0 GOOS=linux mkdir -p bin/ && go build -ldflags "-X main.Version=$(cat VERSION.txt)" -o ./bin/service ./cmd/service
#RUN CGO_ENABLED=0 GOOS=linux go build -o onboardingsvc ./cmd/service

# Убедиться, что файл ai-service.proto действительно существует
RUN ls -la /app
#RUN ls -la ./bin
# Открываем порт для gRPC


# Делаем исполняемый файл доступным для выполнения
RUN chmod a+x ./bin/service

EXPOSE 50052
#RUN chmod a+x ./onboardingsvc
# Запускаем gRPC сервер
#CMD ["/onboardingsvc"]
CMD ["/app/bin/service"]
