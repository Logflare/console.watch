# console.watch

A console.log polyfill for Cloudflare Workers, per [this post](https://community.cloudflare.com/t/console-watch-a-remote-console-polyfill-for-cloudflare-workers/117892). Deployed using [aws sam](https://aws.amazon.com/serverless/sam/).

## How to deploy

1. Install AWS CLI, make sure your credentials are set up
1. Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
1. From this directory, run `sam deploy -g`. You'll need to specify the stack name and S3 bucket for deployment.
