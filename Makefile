
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
	kubectl apply -f ./localstack/localstack.yaml

stop:
	minikube stop && minikube delete
