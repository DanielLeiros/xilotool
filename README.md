# Xilo Tool

## Build and run

### Requirements

1. Docker CE (https://docs.docker.com/install/)
2. docker-compose (https://docs.docker.com/compose/)
3. Run `sudo docker container ls` and search for a container named "xilo-tool*". If it exists, run `sudo docker rm <CONTAINER_ID>`, where `CONTAINER_ID` is the id of that container.

### Running the development version

1. Run `sudo docker-compose up --build`
2. Xilo Tool will be running at `http://localhost:3000`