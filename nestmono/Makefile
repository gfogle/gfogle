
build:
	docker-compose down --remove-orphans -v && \
  docker system prune -f && \
  docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down --remove-orphans -v && \
  docker system prune -f --volumes
