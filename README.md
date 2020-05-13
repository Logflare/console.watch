# console.watch

A console.log polyfill for Cloudflare Workers, per [this post](https://community.cloudflare.com/t/console-watch-a-remote-console-polyfill-for-cloudflare-workers/117892). Deployed using [aws sam](https://aws.amazon.com/serverless/sam/).

## How to deploy

1. Install AWS CLI, make sure your credentials are set up
2. Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
3. Change all `DomainName` values in the `template.yaml` from `console.watch` to whatever domain name you want to deploy this to.
4. From this directory, run `sam deploy -g --stack-name YOUR-NAME --s3-bucket YOUR-BUCKET`. You'll need to specify the stack name and S3 bucket for deployment.
