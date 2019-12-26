const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

export async function handler(event, context) {
  try {
    const data = {
      id: 456,
      location: {
        address: '45 rue du Duc de Trévise',
        postCode: ' 94420',
        city: 'Le Plessis Trévise',
      },
      challenge: 'Facile',
    };
    
    return {
      headers: responseHeaders,
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
