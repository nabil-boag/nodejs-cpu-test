# Dockerised ECS Test

# Running locally 

When deployed in production the deployment and connectivity between docker 
images is controlled by the task definition JSON files. 

You can simulate the same deployment locally using docker-compose

```sh
docker compose up --build
```