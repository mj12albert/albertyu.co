FROM node:16.15-alpine3.15 AS build_stage

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# app name
ENV APP_NAME=albertyu
ENV WORK_DIR /deploy/${APP_NAME}
ENV NODE_OPTIONS=--max_old_space_size=4096

# Create app directory
RUN mkdir -p ${WORK_DIR} && \
    chown node:node ${WORK_DIR}

RUN apk \
    --no-cache \
    --update \
    add --virtual .build-deps \
    apk-tools \
    build-base && \
    apk del .build-deps

WORKDIR ${WORK_DIR}

COPY ["package-lock.json", "package.json", "./"]

RUN npm set progress=false && \
    npm ci \
    # --production \
    --unsafe-perm \
    --no-cache && \
    npm cache clean --force

COPY . .

RUN npm run build

FROM node:16.15-alpine3.15

COPY ["package-lock.json", "package.json", "./"]

RUN npm set progress=false && \
    npm install -g pm2 --no-cache && \
    npm ci \
    --production \
    --unsafe-perm \
    --no-cache && \
    npm cache clean --force

COPY --from=build_stage /deploy/albertyu/.next ./.next
COPY --from=build_stage /deploy/albertyu/public ./public

EXPOSE 3000

USER node

CMD ["pm2-runtime", "--raw", "start", "npm", "--", "start"]
