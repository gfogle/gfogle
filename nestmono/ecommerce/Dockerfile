ARG NODE_VERSION=14.15.0

#
# Build Stage Installing Dependencies
#
FROM mhart/alpine-node:$NODE_VERSION as build-stage

ARG BUILD_ENV=development
ARG APP_ROOT=/ecommerce

WORKDIR $APP_ROOT

COPY package.json .
COPY package-lock.json .

RUN npm set progress=false && \
    NODE_ENV=${BUILD_ENV} npm install && \
    npm cache clean -f

COPY . .

# Fixing bug where devDependencies are installed
# might not want this since we need to build the assets
RUN if [ "${BUILD_ENV}" == "production" ] ; then \
  rm -rf test usr && \
  node -e 'Object.keys( require( "./package.json" ).devDependencies ).map( function( item ){ console.log( item ) } );' | xargs npm uninstall \
  ; fi

#
# Final Stage For Running Server
#
FROM mhart/alpine-node:slim-$NODE_VERSION

ARG BUILD_ENV=development
ARG APP_ROOT=/ecommerce
ARG RUNTIME_PACKAGES="supervisor make"

WORKDIR $APP_ROOT

RUN apk update && \
    apk upgrade && \
    apk add --update --no-cache $RUNTIME_PACKAGES

COPY --from=build-stage $APP_ROOT $APP_ROOT

COPY usr/supervisord/local.conf /etc/supervisord.conf

# TODO: make this an arg
EXPOSE 3000

CMD [ "/usr/bin/supervisord", "-c", "/etc/supervisord.conf" ]
