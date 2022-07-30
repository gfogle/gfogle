# localstack
This will create the following:

- Namespace of `localstack-ns`
- Localstack instance w/ mounted volumes
- dbadmin for dynamo as a `NodePort` service running on port `8001`

To access that service, run `make start` and then once everything is up run:
```sh
$> minikube service --url dbadmin -n localstack-ns
```
The output will be a url you can copy/paste into the browser to view the GUI.
