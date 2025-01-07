.PHONY: init
# install dev tools
init:
	@go install github.com/yoheimuta/protolint/cmd/protolint@latest
	@go install github.com/git-hooks/git-hooks@v1.3.1
	@git hooks install || true

.PHONY: api
# generate api proto
api:
	@./proto.sh

.PHONY: protolint
# run linter for proto files
protolint:
	@protolint src

.PHONY: protolint-fix
# run linter for proto files and fix
protolint-fix:
	@protolint -fix src

# show help
help:
	@echo ''
	@echo 'Usage:'
	@echo ' make [target]'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
	helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 2, RLENGTH); \
			printf "\033[36m%-22s\033[0m %s\n", helpCommand,helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help