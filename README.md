# PEMO

This project is somehow a copy from a project I (Raphaël) started on the side to help on monitoring for free the Core Web Vitals of the websites across all 50+ domains.

The goal of this repo is to keep a copy for the team to keep working on it or at least using it since I'm leaving soon.

Enjoy !!! 😘

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started as local dev ⚡️

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## BE side of things (from a FE dev 😬)

I was originally hosting it on my perso account on Netlify. But I guess it will be easier for the team to use it on the Yara Azure pipelines etc. Hoping to get it done before I leave 🏎

## Crux API

This web-app whole point is basically to monitore the Crux results for multiple domains, keep track of them over time, and display their individual Core Web Vitals results.

Crux API details can be found here: [https://developer.chrome.com/docs/crux/api/](https://developer.chrome.com/docs/crux/api/)

To get the results an API key is needed. Get there to create the KEY (it's free at time of writing): https://console.developers.google.com/apis/credentials

The environment variable is not commited in the Git history, so the team will have to do it when deploying the repo from the plateform they choose.

- for local: paste it in your ".env.local",

```bash
NEXT_PUBLIC_GOOGLE_CRUX_API_KEY=AIqwertyuiop1234567890ExampleOfKey
```

- for deployed versions paste your API key environment variable inside the place where it gets deployed (Netlify, Azure ?)
