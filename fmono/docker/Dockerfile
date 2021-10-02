ARG NODE_VERSION=14.15.0

#
# Build Stage Installing Dependencies
#
FROM mhart/alpine-node:$NODE_VERSION as build-stage

ARG BUILD_ENV=development
ARG APP_ROOT=/fmono

WORKDIR $APP_ROOT

COPY package.json package-lock.json ./

RUN npm set progress=false && \
    NODE_ENV=${BUILD_ENV} npm install && \
    npm cache clean -f

COPY . .

RUN if [ "${BUILD_ENV}" == "production" ] ; then \
  rm -rf test usr && \
  # Fixing bug where devDependencies are installed
  node -e 'Object.keys( require( "./package.json" ).devDependencies ).map( function( item ){ console.log( item ) } );' | xargs npm uninstall \
  ; fi

#
# Final Stage For Running in Production
#
FROM mhart/alpine-node:slim-$NODE_VERSION

ARG BUILD_ENV=development
ARG APP_ROOT=/fmono
ARG RUNTIME_PACKAGES="supervisor"

WORKDIR $APP_ROOT

RUN apk update && \
    apk upgrade && \
    apk add --update --no-cache $RUNTIME_PACKAGES

COPY --from=build-stage $APP_ROOT $APP_ROOT

COPY docker/supervisord docker/supervisor

RUN if [ "${BUILD_ENV}" == "production" ] ; then \
  cp ./docker/supervisor/production.conf /etc/supervisord.conf && \
  rm -rf ./docker \
  ; fi
RUN if [ "${BUILD_ENV}" == "development" ] ; then \
  cp ./docker/supervisor/development.conf /etc/supervisord.conf \
  ; fi

EXPOSE 4000

CMD [ "/usr/bin/supervisord", "-c", "/etc/supervisord.conf" ]
