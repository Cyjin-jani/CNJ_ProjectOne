// export default function (req, res) {
//   res.send('Work in progress!');
// }

// CORS 해결책 1
export default async function (req, res) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();

    return res.send(data);
  } else if (req.method === 'POST') {
    console.log('req body', req.body);
    return res.send('data has been received!');
  }
}
