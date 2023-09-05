# freeyeti.net - chat server

## Description

By Nestjs, Socket.io, Redis, Elasticsearch

![architect](./docs/architect.png)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
make up # to start development docker containers
```

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

```bash
make down # to stop development docker containers
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

MIT licensed
