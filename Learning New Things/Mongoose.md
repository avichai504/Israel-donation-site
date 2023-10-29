# Mongoose Tutorial

## Table of Contents

1. [Purpose of Mongoose](#purpose-of-mongoose)
2. [Installing Mongoose](#installing-mongoose)
3. [Initialization and Connection](#initialization-and-connection)
4. [Defining a Schema](#defining-a-schema)
5. [Creating a Model](#creating-a-model)
6. [Inserting Documents](#inserting-documents)
7. [Querying Documents](#querying-documents)
8. [Updating Documents](#updating-documents)
9. [Deleting Documents](#deleting-documents)
10. [Closing Connection](#closing-connection)
11. [Common Mongoose Commands](#common-mongoose-commands)
12. [Mongoose Interaction Examples](#mongoose-interaction-examples)

---

## Purpose of Mongoose

Mongoose is a JavaScript library that simplifies the process of working with MongoDB. It provides an abstraction layer to handle data validation, casting, and business logic.

---

## Installing Mongoose

```bash
# Initialize npm in your project if you haven't
npm init -y

# Install Mongoose package
npm install mongoose
```

Here, we install the Mongoose library using npm.

---

## Initialization and Connection

```javascript
const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/myDatabase");
}

connect();
```

We initialize Mongoose and connect it to a MongoDB database located at \`mongodb://localhost:27017/myDatabase\`.

---

## Defining a Schema

```javascript
const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});
```

Schemas are used to define the shape of the documents within a collection.

---

## Creating a Model

```javascript
const UserModel = mongoose.model("User", userSchema);
```

A model is a class that constructs documents. It is created from the Schema.

---

## Inserting Documents

```javascript
const newUser = new UserModel({
  name: "John",
  email: "john@example.com",
  age: 30,
});

newUser.save();
```

To insert a new document, create an instance of the model and call the \`.save()\` method.

---

## Querying Documents

```javascript
UserModel.find({ age: { $gte: 18 } }, (err, docs) => {
  console.log(docs);
});
```

Query documents by calling the \`.find()\` method on the model. It returns an array of matching documents.

---

## Updating Documents

```javascript
UserModel.updateOne({ name: "John" }, { age: 31 }, (err, res) => {
  console.log(res);
});
```

To update a document, use \`.updateOne()\` or \`.updateMany()\` methods.

---

## Deleting Documents

```javascript
UserModel.deleteOne({ name: "John" }, (err, res) => {
  console.log(res);
});
```

To delete a document, use \`.deleteOne()\` or \`.deleteMany()\` methods.

---

## Closing Connection

```javascript
mongoose.connection.close();
```

After completing all operations, close the connection to the MongoDB server.

---

## Common Mongoose Commands

### Table of Contents

1. [mongoose.model()](#mongoosemodel)
2. [document.save()](#documentsave)
3. [Model.find()](#modelfind)
4. [Model.findOne()](#modelfindone)
5. [Model.updateOne()](#modelupdateone)
6. [Model.updateMany()](#modelupdatemany)
7. [Model.deleteOne()](#modeldeleteone)
8. [Model.deleteMany()](#modeldeletemany)

---

## mongoose.model()

```javascript
const UserModel = mongoose.model("User", userSchema);
```

**Why**: Defines a model based on a schema. This allows you to perform CRUD operations.

---

## document.save()

```javascript
newUser.save();
```

**Why**: Inserts or updates a document. When you create a new instance of a model, you can persist it to MongoDB by calling \`.save()\`.

---

## Model.find()

```javascript
UserModel.find({ age: { $gte: 18 } });
```

**Why**: Retrieves multiple documents that match the query criteria.

---

## Model.findOne()

```javascript
UserModel.findOne({ name: "John" });
```

**Why**: Retrieves a single document that matches the query criteria.

---

## Model.updateOne()

```javascript
UserModel.updateOne({ name: "John" }, { age: 31 });
```

**Why**: Updates a single document based on the search criteria.

---

## Model.updateMany()

```javascript
UserModel.updateMany({ age: { $gte: 18 } }, { adult: true });
```

**Why**: Updates multiple documents based on the search criteria.

---

## Model.deleteOne()

```javascript
UserModel.deleteOne({ name: "John" });
```

**Why**: Deletes a single document based on the search criteria.

---

## Model.deleteMany()

```javascript
UserModel.deleteMany({ age: { $lt: 18 } });
```

**Why**: Deletes multiple documents based on the search criteria.

---

---

## Mongoose Interaction Examples

### Table of Contents

1. [Unpacking DB URL](#unpacking-db-url)
2. [Connecting to MongoDB](#connecting-to-mongodb)
3. [Middleware & Static Files](#middleware--static-files)
4. [Creating and Saving a Document](#creating-and-saving-a-document)
5. [Querying All Documents](#querying-all-documents)

---

### Unpacking DB URL

```javascript
const clusterName = "cluster0";
const databaseName = "dataBase1"; // if the database does not exist it will create it
const userName = "avichai-first-user";
const password = "test1234";
const dbURI = \`mongodb+srv://${userName}:${password}@${clusterName}.ukkmgu7.mongodb.net/${databaseName}?retryWrites=true&w=majority\`;
```

**Why**: Here, the MongoDB URL is broken down into variables for better readability and maintenance.

---

### Connecting to MongoDB

```javascript
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port); // starting the server only after the DB is connected
    console.log("------Connected to the DB------");
  })
  .catch((err) => console.log(err));
```

**Why**: Using Mongoose's \`connect\` method to connect to the MongoDB database. This method returns a promise that either resolves if the connection is successful or rejects if it fails. The app only starts listening on the port if the database connection is successful.

---

### Middleware & Static Files

```javascript
app.set("view engine", "ejs");
app.use(express.static("public")); // anything that goes here will be public available on the browser
app.use(morgan("dev")); // for debugging
```

**Why**: Middleware and static file handling are set up. This is not directly related to Mongoose but is essential for the Express.js application to function correctly.

---

### Creating and Saving a Document

```javascript
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Seconde Title",
    snippet: "About the seconde blog",
    body: "More data here",
    age: "24",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
```

**Why**: A new blog document is created and saved to MongoDB using the \`save\` method. The \`save\` method returns a promise that either resolves with the saved document if the operation is successful or rejects if it fails.

---

### Querying All Documents

```javascript
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
```

**Why**: The \`find\` method is used to query all documents in the collection. This method also returns a promise that either resolves with an array of documents if the operation is successful or rejects if it fails.
