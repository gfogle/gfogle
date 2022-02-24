# Docker
This temporarily houses the Dockerfile that will get built in the mvc4x cli.

You can build the image at the `gfogle` top-level with:
```sh
docker build -t web -f ./web/docker/Dockerfile ./web
```
Then run it with:
```sh
docker run --rm -it -p3000:3000 web:latest
```
