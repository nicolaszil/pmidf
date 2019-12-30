import querystring from 'querystring';

const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

export async function handler(event, context) {
  if (event.httpMethod !== "POST" && event.httpMethod !== "OPTIONS") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // const { name } = querystring.parse(event.body);
  // Object.keys(data).forEach(key => data[key] === null && delete data[key]);

  try {
    return {
      headers: responseHeaders,
      statusCode: 201,
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
