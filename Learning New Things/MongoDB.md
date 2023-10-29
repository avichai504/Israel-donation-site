# MongoDB Tutorial

## Table of Contents
1. [Installing MongoDB and Node.js Driver](#installing-mongodb-and-nodejs-driver)
2. [Initialization and Connection](#initialization-and-connection)
3. [Creating a Database and Collection](#creating-a-database-and-collection)
4. [Inserting Documents](#inserting-documents)
5. [Querying Documents](#querying-documents)
6. [Updating Documents](#updating-documents)
7. [Deleting Documents](#deleting-documents)
8. [Closing Connection](#closing-connection)
9. [Common MongoDB functions](#common-mongodb-functions) (more concepts)

---

## Installing MongoDB and Node.js Driver

```bash
# Install MongoDB (for Ubuntu)
sudo apt update
sudo apt install -y mongodb

# Initialize MongoDB npm package in your project
npm install mongodb
```

Here we install MongoDB and the Node.js driver to enable interactions between MongoDB and a Node.js application.

---

## Initialization and Connection

```javascript
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connect() {
  await client.connect();
}

connect();
```

We initialize MongoDB's Node.js driver and connect to the database running on \`localhost:27017\`.

---

## Creating a Database and Collection

```javascript
async function createDbAndCollection() {
  const db = client.db('myDatabase');
  await db.createCollection('myCollection');
}

createDbAndCollection();
```

This creates a new database named \`myDatabase\` and a new collection named \`myCollection\`.

---

## Inserting Documents

```javascript
async function insertDocument() {
  const db = client.db('myDatabase');
  const collection = db.collection('myCollection');

  await collection.insertOne({
    name: 'John',
    age: 30,
    email: 'john@example.com',
  });
}

insertDocument();
```

Here we insert a single document into the \`myCollection\` collection within \`myDatabase\`.

---

## Querying Documents

```javascript
async function queryDocuments() {
  const db = client.db('myDatabase');
  const collection = db.collection('myCollection');

  const result = await collection.find({}).toArray();
  console.log(result);
}

queryDocuments();
```

This queries all documents from the \`myCollection\` collection and logs them to the console.

---

## Updating Documents

```javascript
async function updateDocument() {
  const db = client.db('myDatabase');
  const collection = db.collection('myCollection');

  await collection.updateOne(
    { name: 'John' },
    { $set: { age: 31 } }
  );
}

updateDocument();
```

We update a document in the \`myCollection\` collection, setting the age of the user named \`John\` to 31.

---

## Deleting Documents

```javascript
async function deleteDocument() {
  const db = client.db('myDatabase');
  const collection = db.collection('myCollection');

  await collection.deleteOne({ name: 'John' });
}

deleteDocument();
```

Here we delete a document where the name is \`John\` from the \`myCollection\` collection.

---

## Closing Connection

```javascript
async function closeConnection() {
  await client.close();
}

closeConnection();
```

Finally, we close the MongoDB client connection.

---

## Common MongoDB functions

# Common MongoDB Functions and Their Uses

## Table of Contents
1. [db.createCollection()](#dbcreatecollection)
2. [db.collection.insertOne()](#dbcollectioninsertone)
3. [db.collection.insertMany()](#dbcollectioninsertmany)
4. [db.collection.find()](#dbcollectionfind)
5. [db.collection.findOne()](#dbcollectionfindone)
6. [db.collection.updateOne()](#dbcollectionupdateone)
7. [db.collection.updateMany()](#dbcollectionupdatemany)
8. [db.collection.deleteOne()](#dbcollectiondeleteone)
9. [db.collection.deleteMany()](#dbcollectiondeletemany)
10. [db.collection.aggregate()](#dbcollectionaggregate)

---

## db.createCollection()

```javascript
db.createCollection("newCollection");
```

**Why**: Used for explicitly creating a new collection. While MongoDB automatically creates collections when you insert data, using `db.createCollection()` allows you to set options like capped collections and collation.

---

## db.collection.insertOne()

```javascript
db.collection('myCollection').insertOne({ key: "value" });
```

**Why**: To insert a single document into a specified collection. This is a fundamental operation for adding data.

---

## db.collection.insertMany()

```javascript
db.collection('myCollection').insertMany([{ key1: "value1" }, { key2: "value2" }]);
```

**Why**: To insert multiple documents into a collection in a single operation. Useful for batch insertion.

---

## db.collection.find()

```javascript
db.collection('myCollection').find({});
```

**Why**: To query documents in a collection. The `find()` method retrieves multiple documents and is the most common read operation.

---

## db.collection.findOne()

```javascript
db.collection('myCollection').findOne({ key: "value" });
```

**Why**: To query a single document from a collection based on a condition. Useful for operations where only one document is expected as a result.

---

## db.collection.updateOne()

```javascript
db.collection('myCollection').updateOne({ key: "value" }, { $set: { key: "new_value" } });
```

**Why**: To update a single document based on a condition. Commonly used to modify existing data.

---

## db.collection.updateMany()

```javascript
db.collection('myCollection').updateMany({}, { $set: { key: "new_value" } });
```

**Why**: To update multiple documents in a collection based on a condition. Useful for batch updates.

---

## db.collection.deleteOne()

```javascript
db.collection('myCollection').deleteOne({ key: "value" });
```

**Why**: To delete a single document from a collection based on a condition. Commonly used to remove specific data.

---

## db.collection.deleteMany()

```javascript
db.collection('myCollection').deleteMany({ key: "value" });
```

**Why**: To delete multiple documents from a collection based on a condition. Useful for batch deletion or purging data.

---

## db.collection.aggregate()

```javascript
db.collection('myCollection').aggregate([{ $match: { key: "value" } }]);
```

**Why**: For performing complex data transformations and computations, including filtering, grouping, and sorting. It's a powerful tool for data analysis and reporting.

