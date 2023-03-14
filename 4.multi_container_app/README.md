## Network
- (optionnal) can add postgres to a network, that way we can use postgres container name as host instead of host.docker.internal & remove port from localhost

```bash
$ docker network create network-example
```
 

## Postgres
- (postgres, postgres) user should exists to make this setup works
- (optionnal) postgres
    - use named volume for data persistency
    - use bind mounts for data persistency, and if we need to know specific location

```bash
$ docker run -p 5432:5432 --rm postgres
$ docker run --network network-example postgres
```


## Frontend
```bash
$ docker run -p 4200:4200 -v $HOME/.../dangular:/app --rm dangular
```

## Backend
```bash
$ docker run -p 3000:3000 -v $HOME/.../dangular:/app --rm --network network-example dnest
```
