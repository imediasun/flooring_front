#!/bin/sh

SERVICE=$1

PROTO_PATH_DIST=./gen
VERSION=`git describe --tags --always`

rm -rf ${PROTO_PATH_DIST}
mkdir -p ${PROTO_PATH_DIST}

for SRV in $(ls ./src) ; do \
  echo "Generating proto for ${SRV}" ; \
  API_PROTO_FILES=`find ./src/${SRV} -name *.proto`; \
  protoc \
    --fatal_warnings \
    --proto_path=./src \
    --proto_path=./third_party \
    --go_out=paths=source_relative:${PROTO_PATH_DIST} \
    --go-grpc_out=paths=source_relative:${PROTO_PATH_DIST} \
    --go-http_out=paths=source_relative:${PROTO_PATH_DIST} \
    --go-errors_out=paths=source_relative:${PROTO_PATH_DIST} \
    --validate_out=paths=source_relative,lang=go:${PROTO_PATH_DIST} \
    --experimental_allow_proto3_optional \
    --doc_out=${PROTO_PATH_DIST} \
    --doc_opt=html,proto.html \
    --openapi_out=naming=proto,fq_schema_naming=true,version=${VERSION},title=${SERVICE_NAME}:${PROTO_PATH_DIST} \
    ${API_PROTO_FILES} 2> /tmp/protoc_error; \
    ERR=`cat /tmp/protoc_error`; \
    if [ -n "${ERR}" ]; then \
      echo $ERR; \
      exit 1; \
    fi; \
done