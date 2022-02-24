
.PHONY: build

build:
	bazel build //...

dashboard:
	minikube dashboard

graph:
	bazel query 'deps(//...)' --output graph --color=yes | dot -Tpng > dist/graph.png

install:
	./bin/install
	bazel run @nodejs//:npm_node_repositories install -- --save

start:
# minikube start --driver=docker
	minikube start && \
	minikube addons enable ingress && \
	kubectl apply -f ./localstack/localstack.yaml && \
	docker build -t web -f ./web/docker/Dockerfile ./web && \
	docker run --rm -it -d --name web -p3000:3000 web:latest

stop:
	minikube stop && minikube delete && docker stop web
