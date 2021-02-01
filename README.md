# Project3_Group7

## Container commands
  ```
To create an image from Dockerfile:
sudo docker-compose build

To start docker-compose.yml:
sudo docker-compose up

To stop docker-compose.yml:
sudo docker-compose down

To delete residual docker containers:
sudo docker system prune

To enter to mongo's container:
sudo docker exec -it mongo bash

To log into mongo with root user:
mongo -u "root" -p "example" HOSTIP --authenticationDatabase "admin"

To enter an specific container with a bash shell:
sudo docker exec -it <container_name> bash
  
  ```
