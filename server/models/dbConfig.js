const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'authentication';

async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');

    const findUser = await collection.find({ "user.email": "mehdi.tadjer@outlook.com" }).toArray();
    console.log('Found documents =>', findUser);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());