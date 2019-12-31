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
    const pmRefs = await client.query(q.Paginate(q.Match(q.Index('get_all'))));
    const pmData = await client.query(pmRefs.data.map(pmRef => q.Get(q.Ref(pmRef))));
    const pmList = pmData.map(({ data }) => data);

    return callback(null, {
      headers: responseHeaders,
      statusCode: 200,
      body: JSON.stringify(pmList),
    });
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: e.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    });
  }
}
