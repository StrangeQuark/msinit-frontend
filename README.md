# Getting Started with the MSINIT frontend service

Begin by installing the node modules with the `npm i` command

You can run the service locally by running `npm start`

## Docker

You can also build the service in a docker container with the following commands:

```docker image build -t msinit-frontend .```
```docker run -dp 3001:3001 --name msinit-frontend msinit-frontend```

This application also supports docker compose, it assumes that an external network is available with the name shared-network:

```docker network create shared-network```

Note that the above command needs only to be run once, you can then launch the container using the following command:

```docker-compose up```
