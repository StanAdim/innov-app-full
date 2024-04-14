setup:
	@make build
	@make up 
	@make composer-update
build:
	docker compose build 
stop:
	docker compose stop
up:
	docker compose up -d

composer-update:
	docker exec newinnov-app bash -c "composer update"
	docker exec newinnov-app bash -c "cp .env.example .env"
	docker exec newinnov-app bash -c "php artisan key:generate"
	
optimize:
	docker exec newinnov-app bash -c "php artisan optimize:fresh"
data:
	docker exec newinnov-app bash -c "php artisan migrate:fresh --seed"

bash:
	docker exec -it newinnov-app bash

fresh:
	docker compose restart
rmi:
	docker image rm -f newinnov-app-newinnov-app
logs: 
	docker logs -f newinnov-app
boost:
	docker exec  newinnov-app bash -c "php artisan optimize"
	docker exec  newinnov-app bash -c "composer dump-autoload"

# backup_db: 
	# docker exec mysql_db bash -c "./home/backups/backup_script.sh"
