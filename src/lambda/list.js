const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

export async function handler(event, context) {
  try {
    const pmList = [
      {
        id: 456,
        location: 'Le Plessis Trévise',
      },
      {
        id: 716,
        location: 'Villiers',
      },
      {
        id: 974,
        location: 'Tremblay',
      },
    ];
    
    return {
      headers: responseHeaders,
      statusCode: 200,
      body: JSON.stringify({ msg: pmList[0].location }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
