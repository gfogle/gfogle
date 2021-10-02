
build:
	docker-compose build

install:
	./bin/install

logs:
	docker-compose logs -f fmono

start:
	docker-compose up -d

stop:
	docker-compose down --remove-orphans && \
	docker system prune -f --volumes
