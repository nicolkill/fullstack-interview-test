IMAGE_TAG := nicolkill/fullstack-interview-test
REVISION=$(shell git rev-parse --short HEAD)
RUN_STANDARD := docker run --rm -v `pwd`:/app -w /app node:carbon
RUN := docker run --rm -v `pwd`:/app -w /app ${IMAGE_TAG}:latest

all: build image

back:
	docker-compose up

front:
	cd frontend && npm start

build:
	docker run -it --rm -v `pwd`/backend:/app -w /app node:carbon npm install
	docker run -it --rm -v `pwd`/frontend:/app -w /app node:carbon npm install

image:
	docker build -t ${IMAGE_TAG}:${REVISION} ./backend
	docker tag ${IMAGE_TAG}:${REVISION} ${IMAGE_TAG}:latest