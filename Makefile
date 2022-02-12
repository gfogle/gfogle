
.PHONY: build

build:
	bazel build //...

graph:
	bazel query 'deps(//...)' --output graph --color=yes | dot -Tpng > dist/graph.png

install:
	./bin/install
	bazel run @nodejs//:npm_node_repositories install -- --save
