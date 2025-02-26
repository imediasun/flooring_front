up: #create and start containers
	@docker compose up -d


down: #stop containers
	@docker compose down


rebuild: #rebuild all
	@docker compose down && docker compose up -d --build

# Start Go AI microservice container
up-go-ai:
	docker-compose up -d grpc-ai

connect_back: #connect to php application
	@docker exec -it flooring-php-fpm bash

install: install-php
#install-frontend

# Generate gRPC PHP classes inside the php-fpm container
generate-grpc-ai:
	docker-compose exec flooring-php-fpm protoc \
        --proto_path=/var/www/backend/ai_service \
        --php_out=/var/www/backend/src/Service \
        /var/www/backend/ai_service/ai_service.proto

setup:  ## Create and start containers
	$(MAKE) up-postgres_front
	$(MAKE) up-redis
	$(MAKE) install
	$(MAKE) up-php
	$(MAKE) up-papacarlo-nginx

setup-db:  ## Create and start containers
	$(MAKE) up-postgres_onboarding
	$(MAKE) up-migrate-onboarding

up-migrate-onboarding: ## Create and start containers
	docker compose up -d migrate_onboarding

up-mailhog: ## Create and start containers
	docker compose up -d papacarlo-mailhog

up-create-topics:
	docker compose up -d create-topics

up-migrate-payment: ## Create and start containers
	docker compose up -d migrate_payment

up-onboardingservice: ## Create and start containers
	docker compose up --build -d onboardingsvc

up-kafka: ## Create and start containers
	docker compose up --build -d kafka

up-zookeeper: ## Create and start containers
	docker compose up --build -d zookeeper

up-zoonavigator: ## Create and start containers
	docker compose up --build -d zoonavigator

up-postgres_onboarding: ## Create and start containers
	docker compose up -d postgres_onboarding

up-postgres_payment: ## Create and start containers
	docker compose up -d postgres_payment

up-postgres_front: ## Create and start containers
	docker compose up -d flooring-postgres_front

up-redis: ## Create and start containers
	docker compose up -d flooring-redis

up-frontend: ## Start panel-ui
	docker compose up --build  -d frontend

up-papacarlo-nginx:
	docker compose up -d --no-deps --build flooring-nginx

proto-regenerate: ## Regenerate proto files in the existing php-fpm container
	docker exec -u root flooring-php-fpm make proto

install-php: ## install-php
	ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
	docker compose build flooring-php-fpm
	docker compose run --rm --no-deps -u root flooring-php-fpm make proto
	docker compose run --rm --no-deps -u root flooring-php-fpm composer install
	docker compose run --rm --no-deps -u root flooring-php-fpm php artisan migrate

install-onboarding: ## install-php
	ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
	$(MAKE) -C ../onboardingservice all

install-certs: ## Create and start containers
	sudo chmod 777 -R /etc/ssl/certs/
	sudo chmod 777 -R ./nginx/cert
	chmod +x ./nginx/create-certificates.sh
	sudo ./nginx/create-certificates.sh freelance.back elitehouseflooring.com bitcoin-chess.com btc-chess.back


install-frontend: ## Install dependecy before run in watcher mode
	docker compose build frontend
	docker compose run --rm --no-deps frontend yarn install

up-php: ## Create and start containers
	docker-compose up -d flooring-php-fpm

test:
	docker-compose exec flooring-php-fpm vendor/bin/phpunit --configuration phpunit.xml
