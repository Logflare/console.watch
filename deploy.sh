#!/bin/sh

tmp=$(mktemp)

sam package \
  --template-file template.yaml \
  --s3-bucket console-watch-artifacts \
  --output-template-file $tmp

sam deploy \
  --template-file $tmp \
  --stack-name console-watch \
  --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND
