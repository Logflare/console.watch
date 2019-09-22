let {ApiGatewayManagementApi} = require('aws-sdk')
let agm = new ApiGatewayManagementApi({endpoint: process.env.WS_ENDPOINT})

exports.handler = async request => {
  await agm.postToConnection({
    ConnectionId: request.pathParameters.id,
    Data: request.body
  }).promise()

  return {statusCode: 204}
}
