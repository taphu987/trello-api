const { env } = require('~/config/environtment');
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@trello-web-api.x1aubx5.mongodb.net/?retryWrites=true&w=majority`;

exports.connectDB = async () => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB server successfully');

        // list databases
        await listDatabases(client);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    } finally {
        // Close the connection
        await client.close();
    }
};

const listDatabases = async (client) => {
    const databaseList = await client.db().admin().listDatabases();
    console.log(databaseList);
    console.log('Your databases: ');
    databaseList.databases.forEach((db) => console.log('-', db.name));
};
