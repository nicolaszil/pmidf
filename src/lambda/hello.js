const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    headers: responseHeaders,
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
