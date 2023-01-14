# WordPress Headless CMS + NextJS 

This repo contains the front-end of an application that uses WordPress as a Headless CMS — as well as my handrolled `common-components` library, and several experiments.

## Built With

- React + Next.js
- WordPress API
- Storybook

## Getting Started

**To get started, follow the instructions below**

To get a local copy up and running follow these simple example steps.

- Setup and run a WordPress server by following the blog post [here]()
- Switch out the constants in the `lib/constants.js` file with the correct URLs to your WordPress Server.

For the frontend:

- run

```
yarn install
```

to install all packages. then

```
yarn dev
```

- to start the app in the browser.

To run the storybook, simply run:

```
yarn storybook
```

And to build for production, first run:

```
yarn build
```

then

```
yarn start
```

### Prerequisites
- Node^8.0


## Authors
👤 timothyneiljohnson

## Acknowledgments
This began as a fork from a helpful repo by https://github.com/Aeeiee-Team.

## 📝 License

This project is [MIT](lic.url) licensed.
