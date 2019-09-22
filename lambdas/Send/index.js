let {ApiGatewayManagementApi} = require('aws-sdk')

exports.handler = async ({endpoint, connectionId}) => {
  let agm = new ApiGatewayManagementApi({endpoint})

  await agm.postToConnection({
    ConnectionId: connectionId,
    Data: connectionId
  }).promise()
}
