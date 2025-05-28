#!/bin/bash

cd /home/ec2-user/app

# Stop and remove old container
docker stop react_app || true
docker rm react_app || true

# Build Docker image
docker build -t react-app-image .

# Run the container
docker run -d -p 80:80 --name react_app react-app-image
