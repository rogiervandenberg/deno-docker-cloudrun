# Deno in Docker (on Cloud Run)

Concrete example of Deno Run on Cloud Run. Could be used as boilerplate for Deno in Docker / on Google Cloud Run.

## Run locally

First, [make sure you have Deno installed](https://deno.land/x/install/)

Then, to locally run, execute:

```shell
deno run --allow-env --allow-net main.ts
```

This will build and run the demo.

## Run in Docker

To run in docker, first build the app:

```shell
docker build -t denotest .
```

then run the container:

```shell
docker run -it --init -p 8080:8080 denotest
```

The dockerfile will pre-cache all dependencies.

## Run on Cloud Run

Because the whole thing runs in Docker, this is easy (make sure you are logged in and have the right project on GCP selected with `gcloud`):

### Set GCP project to your env variable

This is optional, but nice to have:

```shell
GCP_PROJECT=$(gcloud config list --format 'value(core.project)')
```

### Submit your code to Google Code Repository

```shell
gcloud builds submit --tag gcr.io/$GCP_PROJECT/denotest
```

### Deploy your code on Cloud Run

```shell
gcloud run deploy denotest --image gcr.io/$GCP_PROJECT/denotest --platform managed --allow-unauthenticated
```

## One click to deploy to Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?git_repo=https://github.com/rogiervandenberg/deno-docker-cloudrun)
