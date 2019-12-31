import faunadb, { query as q } from "faunadb";
import { DB_KEY } from '../../config/fauna';

const client = new faunadb.Client({ secret: DB_KEY });

const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

export async function handler(event, context, callback) {
  try {
    const { pmId } = event.queryStringParameters;
    const { data: pmData } = await client.query(q.Get(q.Match(q.Index('get_one'), pmId)));

    return callback(null, {
      headers: responseHeaders,
      statusCode: 200,
      body: JSON.stringify(pmData),
    });
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: e.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    });
  }
}
