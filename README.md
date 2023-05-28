# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
yarn
```

### Dependencies

```sh
npm install --global yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```sh
yarn build
aws s3 sync ./build s3://maplechart.com/
```
