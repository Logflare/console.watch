let {Lambda} = require('aws-sdk')
let lambda = new Lambda()
let {SEND_FUNCTION, WS_REGION} = process.env

exports.handler = async ({requestContext}) => {
  let {apiId, stage, connectionId} = requestContext
  let host = `${apiId}.execute-api.${WS_REGION}.amazonaws.com`
  let endpoint = `https://${host}/${stage}`

  await lambda.invoke({
    FunctionName: SEND_FUNCTION,
    InvocationType: 'Event',
    Payload: JSON.stringify({endpoint, connectionId})
  }).promise()

  return {statusCode: 200}
}
