.PHONY: proto

# Directories
PROTO_DIR := ./proto/src/onboardingservice
THIRD_PARTY_DIR := ./proto/third_party
OUTPUT_DIR := ./app/Grpc
PROTO_FILES := $(shell find $(PROTO_DIR) -name '*.proto')
THIRD_PARTY_PROTO_FILES := $(shell find $(THIRD_PARTY_DIR) -name '*.proto')
PHP_CLASSES := $(patsubst $(PROTO_DIR)/%.proto,$(OUTPUT_DIR)/%,$(PROTO_FILES))
THIRD_PARTY_PHP_CLASSES := $(patsubst $(THIRD_PARTY_DIR)/%.proto,$(OUTPUT_DIR)/%,$(THIRD_PARTY_PROTO_FILES))

# Protoc compiler and plugin
PROTOC := protoc
GRPC_PHP_PLUGIN := grpc_php_plugin

proto: $(PHP_CLASSES) $(THIRD_PARTY_PHP_CLASSES)

$(OUTPUT_DIR)/%: $(PROTO_DIR)/%.proto
	@mkdir -p $(OUTPUT_DIR)
	$(PROTOC) -I$(PROTO_DIR) \
		-I$(THIRD_PARTY_DIR) \
		--php_out=$(OUTPUT_DIR) \
		--grpc_out=$(OUTPUT_DIR) \
		--plugin=protoc-gen-grpc=$(shell which $(GRPC_PHP_PLUGIN)) \
		$<
	@echo "Generated PHP classes for $<"

$(OUTPUT_DIR)/%: $(THIRD_PARTY_DIR)/%.proto
	@mkdir -p $(OUTPUT_DIR)
	-$(PROTOC) -I$(THIRD_PARTY_DIR) \
		-I$(PROTO_DIR) \
		--php_out=$(OUTPUT_DIR) \
		--grpc_out=$(OUTPUT_DIR) \
		--plugin=protoc-gen-grpc=$(shell which $(GRPC_PHP_PLUGIN)) \
		$<
	@echo "Generated PHP classes for $<"
