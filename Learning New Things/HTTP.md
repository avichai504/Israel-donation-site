# HTTP Concepts Notebook

## Table of Contents
1. [Introduction to HTTP](#introduction-to-http)
2. [HTTP Methods](#http-methods)
3. [HTTP Headers](#http-headers)
4. [HTTP Body](#http-body)
5. [HTTP Status Codes](#http-status-codes)

---

## Introduction to HTTP

### Why:
HTTP (HyperText Transfer Protocol) is the foundation of data communication for the World Wide Web.

### How:
Browsers send HTTP requests to servers, which then send HTTP responses back.

### Libraries:
- [axios](https://github.com/axios/axios) for client-side.
- [Express](https://expressjs.com/) for server-side.

---

## HTTP Methods

### Why:
To define the action to perform on the specified resource.

### How:
```http
GET /users
POST /users
PUT /users/1
DELETE /users/1
```

### Libraries:
- [axios](https://github.com/axios/axios) for client-side.
- [Express](https://expressjs.com/) for server-side.

---

## HTTP Headers

### Why:
To provide additional information about the request or response.

### How:
```http
Content-Type: application/json
Authorization: Bearer abc123
```

### Libraries:
- [helmet](https://helmetjs.github.io/) for setting security headers.
  
---

## HTTP Body

### Why:
To send data to the server in methods like POST, PUT.

### How:
```json
{
  "name": "John",
  "email": "john@example.com"
}
```

### Libraries:
- [body-parser](https://www.npmjs.com/package/body-parser) for parsing incoming request bodies.

---

## HTTP Status Codes

| Range | Meaning |
|-------|---------|
| 1xx   | Informational |
| 2xx   | Success |
| 3xx   | Redirection |
| 4xx   | Client Errors |
| 5xx   | Server Errors |

### 1xx - Informational

- `100`: Continue
- `101`: Switching Protocols

### 2xx - Success

- `200`: OK
- `201`: Created
- `204`: No Content

### 3xx - Redirection

- `301`: Moved Permanently
- `302`: Found
- `304`: Not Modified

### 4xx - Client Errors

- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### 5xx - Server Errors

- `500`: Internal Server Error
- `501`: Not Implemented
- `502`: Bad Gateway
- `503`: Service Unavailable
