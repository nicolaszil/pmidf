import faunadb, { query as q } from "faunadb";
import { DB_KEY } from '../../config/fauna';

const client = new faunadb.Client({ secret: DB_KEY });

const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

const checkMissingFields = data => {
  const mandatoryFields = ['firstName', 'number', 'address'];

  let missingFields = [];
  Object.keys(data).forEach(key => (mandatoryFields.includes(key) && !data[key]) && missingFields.push(key));
  
  if (missingFields.length) throw new Error(`Missing field${missingFields.length > 1 ? 's' : ''}: ${missingFields.join(', ')}.`);
};

export async function handler(event, context, callback ) {
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'OPTIONS') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // const { name } = querystring.parse(event.body);
  // Object.keys(data).forEach(key => data[key] === null && delete data[key]);

  try {
    const reqData = JSON.parse(event.body);

    checkMissingFields(reqData);

    const { data: pmData } = await client.query(
      q.Create(q.Collection('pms'), { data: { ...reqData } })
    );

    return callback(null, {
      headers: responseHeaders,
      statusCode: 201,
      body: JSON.stringify(pmData),
    });
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: e.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    });
  }
}
