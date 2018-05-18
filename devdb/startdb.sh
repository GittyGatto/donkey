#!/bin/bash

docker run --rm \
	--env POSTGRES_USER=donkey \
	--env POSTGRES_PASSWORD=asdfasdf \
	--env POSTGRES_DB=donkey \
	-p 15432:5432 \
	postgres:9.6
