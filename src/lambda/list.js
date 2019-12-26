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
      {
        id: 454,
        location: 'Le Plessis Trévise',
      },
      {
        id: 714,
        location: 'Villiers',
      },
      {
        id: 972,
        location: 'Tremblay',
      },
      {
        id: 455,
        location: 'Le Plessis Trévise',
      },
      {
        id: 715,
        location: 'Villiers',
      },
      {
        id: 973,
        location: 'Tremblay',
      },
    ];
    
    return {
      headers: responseHeaders,
      statusCode: 200,
      body: JSON.stringify(pmList),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
