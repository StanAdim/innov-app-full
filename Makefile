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
	docker exec ictc-app bash -c "composer update"
	docker exec ictc-app bash -c "cp .env.example .env"
	docker exec ictc-app bash -c "php artisan key:generate"
	
optimize:
	docker exec ictc-app bash -c "php artisan optimize:fresh"
data:
	docker exec ictc-app bash -c "php artisan migrate:fresh --seed"

bash:
	docker exec -it ictc-app bash

fresh:
	docker compose restart
rmi:
	docker image rm -f ictc-app-ictc-app
logs: 
	docker logs -f ictc-app

# backup_db: 
	# docker exec mysql_db bash -c "./home/backups/backup_script.sh"
