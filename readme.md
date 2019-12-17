# Full stack docker example

## Setup
1. docker-compose up --build
2. docker exec -it backend-docker sh <!-- Enter backend docker container -->
3. NODE_ENV=docker node_modules/.bin/sequelize db:create
4. NODE_ENV=docker node_modules/.bin/sequelize db:migrate
5. NODE_ENV=docker node_modules/.bin/sequelize db:seed:all

## Intro
This repo contains an example of dockerizing a full stack application. Please have a look at my [blog](https://medium.com/@siddharth.lakhara/dockerizing-a-full-stack-js-app-ceb99411996e) if you want to know how to create it

## Tech stack
 - Frontend - ReactJs
 - Backend - HapiJs
 - DB - Postgres

 