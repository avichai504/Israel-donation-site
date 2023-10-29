# ExpressJS Tutorial

## Table of Contents
1. [Importing Modules](#importing-modules)
2. [Middleware](#middleware)
3. [Basic Routing](#basic-routing)
4. [URL Parameters](#url-parameters)
5. [Query Parameters](#query-parameters)
6. [POST Request](#post-request)
7. [404 Handling](#404-handling)
8. [Server Listening](#server-listening)


---

## Importing Modules


```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
```


We're importing the necessary modules here. We import `express` for the core ExpressJS functionalities and `body-parser` for parsing incoming request bodies.

---

## Middleware


```javascript
app.use(bodyParser.json());
app.use(express.static('public'));
```


We use `bodyParser.json()` to automatically parse incoming JSON payloads into JavaScript objects. `express.static('public')` is used to serve static files from the `public` directory.

---

## Basic Routing


```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});
```


We're setting up two simple routes here: the root (`/`) and `/about`. When a GET request is made to these URLs, the corresponding text will be displayed.

---

## URL Parameters


```javascript
app.get('/users/:userId', (req, res) => {
  res.send(`User ID is: ${req.params.userId}`);
});
```


We define a dynamic route `/users/:userId` to capture the `userId` from the URL. This `userId` is then accessible via `req.params`.

---

## Query Parameters


```javascript
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`Search query is: ${q}`);
});
```


We have a `/search` endpoint. It reads query parameters using `req.query`. For example, `/search?q=test` will produce the output "Search query is: test".

---

## POST Request


```javascript
app.post('/submit', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});
```


We define a POST route `/submit`. It receives JSON data in the request body, which is automatically parsed by `body-parser`.

---

## 404 Handling


```javascript
app.use((req, res) => {
  res.status(404).send('Page not found');
});
```


This is a catch-all middleware function for handling 404 errors. If no previous route or middleware handles the request, this function will be invoked.

---

## Server Listening


```javascript
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```


Finally, we start the Express server on port 3000. You can navigate to `http://localhost:3000` to view the app.

---
