#-----------------------------------------------------------
# Docker version 28.0.1, build 068a01e
# Docker Compose version v2.33.1

.DEFAULT_GOAL = help

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

##
## —————————————————————————————— Docker Management
##

up: ## Create and start all containers in detached mode
	@docker compose up -d

down: ## Stop and remove all containers
	@docker compose down

rebuild: ## Stop, rebuild (without cache), and start all containers
	@docker compose down && docker compose build --no-cache && docker compose up -d

connect_back: ## Connect to the PHP application container (flooring-php-fpm)
	@docker exec -it flooring-php-fpm bash

##
## —————————————————————————————— Application Setup and Installation
##

setup: ## Setup the entire application environment (PostgreSQL, Redis, PHP, Frontend, Nginx)
	$(MAKE) up-postgres_front
	$(MAKE) up-redis
	$(MAKE) install
	$(MAKE) up-php
	$(MAKE) up-frontend
	$(MAKE) up-flooring-nginx

install: install-php install-frontend ## Install PHP and Frontend dependencies

install-php: ## Install PHP dependencies and run migrations
	ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
	docker compose build flooring-php-fpm
	docker compose run --rm --no-deps -u root flooring-php-fpm composer install
	docker compose run --rm --no-deps -u root flooring-php-fpm php artisan migrate

install-frontend: ## Install Frontend dependencies
	docker compose build admin-app
	docker compose run --rm --no-deps admin-app yarn install

install-certs: ## Install SSL certificates
	sudo chmod 777 -R /etc/ssl/certs/
	sudo chmod 777 -R ./nginx/cert
	chmod +x ./nginx/create-certificates.sh
	sudo ./nginx/create-certificates.sh elitehouseflooring.com

##
## —————————————————————————————— Container Management (Individual)
##

up-postgres_front: ## Start PostgreSQL container
	docker compose up -d flooring-postgres_front

up-redis: ## Start Redis container
	docker compose up -d flooring-redis

up-php: ## Start PHP application container (flooring-php-fpm)
	docker compose up -d flooring-php-fpm

up-frontend: ## Start Frontend application container (admin-app)
	docker compose up --build -d admin-app

up-flooring-nginx: ## Start Nginx container
	docker compose up -d --no-deps --build flooring-nginx

##
## —————————————————————————————— Testing
##

test: ## Run PHP unit tests
	docker compose exec flooring-php-fpm vendor/bin/phpunit --configuration phpunit.xml