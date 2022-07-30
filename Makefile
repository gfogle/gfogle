
.PHONY: build

dashboard:
	minikube dashboard

graph:
	bazel query 'deps(//...)' --output graph --color=yes | dot -Tpng > dist/graph.png

install:
	sh bin/install

start:
	minikube start && \
	minikube addons enable ingress && \
	kubectl apply -f ./localstack/localstack.yaml && \
	sleep 5 && \
	echo "You can access a local DB Admin instance at: " && \
	minikube service --url dbadmin -n localstack-ns

stop:
	minikube stop && \
	minikube delete
