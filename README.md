### ABOUT

> Series of Dockerfiles and docker-compose.ymls and node.js files for running a 12 factor app. 
> Code and tutorials were taken from this [tutorial](https://egghead.io/lessons/docker-run-stateless-docker-containers).

### INSTALL

> npm install

> docker-compose up -d

### SETUP


1. Explicitly denote versions of packages
2. Use feature branches and merge back into master.
3. Manage configuration with environment variables
4. Proxy requests so that local and remote environments are treated equally.
5. Build and run multi container apps using Docker Compose.
6. Write and use stateless docker containers.
> Docker-Compose is covered.  I think you get a different image if you use Docker-Compose to run your app than if you build the image with Docker by itself and then run it.  Yaml also seems to be space/tab sensitive.
7. Expose and map services using Docker Port Binding.
> You have to use a port mapping using the "-p" option in order to access applications deployed using docker.
8. Enable horizontal scaling by using a load balancer like Nginx/HAProxy
9. Make Containers run HA
10. Have near identical "dev", "staging" and "prod" environments.
11. Pipe log oupuot to STDOUT with Docker
12. Run one-time docker containers.  //