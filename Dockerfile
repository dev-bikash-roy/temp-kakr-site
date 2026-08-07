# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

FROM base as deps
COPY package*.json ./
# RUN npm ci --omit=dev
RUN npm ci

FROM deps as build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base as final
ENV NODE_ENV production
USER node
COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.output/ ./.output/
EXPOSE 3000
CMD node .output/server/index.mjs