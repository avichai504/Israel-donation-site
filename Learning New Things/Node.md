# Node.js Server-Side Development Notebook

## Table of Contents
1. [Why Server-Side Development](#why-server-side-development)
2. [Setting Up Node.js](#setting-up-nodejs)
3. [HTTP Server](#http-server)
4. [File Operations](#file-operations)
5. [Database Operations](#database-operations)
6. [Asynchronous Programming](#asynchronous-programming)
7. [Express.js](#expressjs)

---

## Why Server-Side Development

### Summary:
Server-side development is crucial for managing data storage, authentication, authorization, logging, data manipulation, and business logic.

---

## Setting Up Node.js

### Summary:
Node.js is a popular runtime to write server-side JavaScript code. You can install it from [Node.js official website](https://nodejs.org/).

### Example:
```bash
# Install Node.js (Ubuntu)
sudo apt install nodejs npm
```

---

## HTTP Server

### Summary:
An HTTP server listens for incoming requests from clients, processes them, and returns responses.

### Example:
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(3000);
```

### Libraries:
- [Express](https://expressjs.com/)
- [Koa](https://koajs.com/)

---

## File Operations

### Summary:
Reading and writing files are common tasks in server-side programming to store configurations, logs, and data.

### Example:
```javascript
const fs = require('fs');

// Write File
fs.writeFileSync('file.txt', 'Hello, World!');

// Read File
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
```

### Libraries:
- [fs-extra](https://github.com/jprichardson/node-fs-extra)
- [graceful-fs](https://github.com/isaacs/node-graceful-fs)

---

## Database Operations

### Summary:
Databases are used to persistently store and retrieve data.

### Example:
```javascript
// Using MongoDB Node.js driver
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect().then(() => {
  const db = client.db('myDatabase');
  const collection = db.collection('myCollection');
  collection.insertOne({ name: 'John' });
});
```

### Libraries:
- [Mongoose](https://mongoosejs.com/)
- [Sequelize](https://sequelize.org/)

---

## Asynchronous Programming

### Summary:
Asynchronous programming is essential for performing non-blocking operations, enhancing the server's performance.

### Example:
```javascript
const fetchData = async () => {
  // Simulating asynchronous operation
  return new Promise((resolve) => setTimeout(() => resolve('Data fetched'), 2000));
};

fetchData().then(data => console.log(data));
```

### Libraries:
- [async](https://caolan.github.io/async/v3/)
- [Bluebird](http://bluebirdjs.com/docs/getting-started.html)

---

## Express.js

### Summary:
Express.js is a web framework for Node.js that simplifies tasks like routing, middleware configuration, and more.

### Example:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

### Libraries:
- [NestJS](https://nestjs.com/)
- [Fastify](https://www.fastify.io/)

