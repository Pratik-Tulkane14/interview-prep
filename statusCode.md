# HTTP Status Codes in REST APIs: Interview Questions and Answers

## 1. What are HTTP status codes, and why are they important in REST APIs?
**Answer:**  
HTTP status codes are standardized three-digit codes returned by a server in response to a client's request. They indicate the outcome of the request, such as success, failure, or redirection. In REST APIs, status codes are crucial because:
- They provide clear feedback to the client about the result of the request.
- They help in debugging and troubleshooting issues.
- They ensure consistency and adherence to RESTful principles.

---

## 2. Can you explain the different categories of HTTP status codes?
**Answer:**  
HTTP status codes are divided into five categories based on their first digit:
1. **1xx (Informational):** The request was received, and the process is continuing.  
   - Example: `100 Continue`
2. **2xx (Success):** The request was successfully received, understood, and accepted.  
   - Example: `200 OK`, `201 Created`
3. **3xx (Redirection):** Further action is needed to complete the request.  
   - Example: `301 Moved Permanently`, `304 Not Modified`
4. **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled.  
   - Example: `400 Bad Request`, `404 Not Found`
5. **5xx (Server Error):** The server failed to fulfill a valid request.  
   - Example: `500 Internal Server Error`, `503 Service Unavailable`

---

## 3. What is the difference between `200 OK` and `201 Created`?
**Answer:**  
- **`200 OK`:** Indicates that the request was successful, and the response body contains the requested data. It is commonly used for GET requests.
- **`201 Created`:** Indicates that the request was successful, and a new resource was created as a result. It is typically used for POST requests when a new resource is created on the server.

---

## 4. When would you use a `400 Bad Request` status code?
**Answer:**  
The `400 Bad Request` status code is used when the server cannot process the request due to client-side errors, such as:
- Invalid request syntax (e.g., malformed JSON).
- Missing required parameters.
- Invalid data types or values in the request payload.

---

## 5. What does the `401 Unauthorized` status code mean?
**Answer:**  
The `401 Unauthorized` status code indicates that the request lacks valid authentication credentials. It is used when the client must authenticate itself to access the requested resource.

---

## 6. What is the difference between `401 Unauthorized` and `403 Forbidden`?
**Answer:**  
- **`401 Unauthorized`:** The client must authenticate itself to access the resource. The server is essentially saying, "I don't know who you are."
- **`403 Forbidden`:** The client is authenticated, but it does not have permission to access the requested resource. The server is saying, "I know who you are, but you can't access this."

---

## 7. When would you use a `404 Not Found` status code?
**Answer:**  
The `404 Not Found` status code is used when the server cannot find the requested resource. This could happen if:
- The resource does not exist.
- The URL is incorrect or invalid.

---

## 8. What does the `500 Internal Server Error` status code mean?
**Answer:**  
The `500 Internal Server Error` status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It is a generic error message for server-side issues.

---

## 9. What is the purpose of the `503 Service Unavailable` status code?
**Answer:**  
The `503 Service Unavailable` status code indicates that the server is temporarily unable to handle the request. This could be due to:
- Server maintenance.
- Overload or high traffic.
- Temporary downtime.

---

## 10. What is the difference between `301 Moved Permanently` and `302 Found`?
**Answer:**  
- **`301 Moved Permanently`:** Indicates that the requested resource has been permanently moved to a new URL. Clients should update their bookmarks or links to the new URL.
- **`302 Found`:** Indicates that the requested resource is temporarily located at a different URL. Clients should continue to use the original URL for future requests.

---

## 11. What is the `204 No Content` status code used for?
**Answer:**  
The `204 No Content` status code indicates that the request was successful, but there is no content to send in the response body. It is commonly used for DELETE requests or when an update operation does not require a response body.

---

## 12. What is the `429 Too Many Requests` status code?
**Answer:**  
The `429 Too Many Requests` status code indicates that the client has sent too many requests in a given amount of time (rate limiting). The server may include a `Retry-After` header to indicate when the client can try again.

---

## 13. What is the `415 Unsupported Media Type` status code?
**Answer:**  
The `415 Unsupported Media Type` status code indicates that the server cannot process the request because the media type (e.g., JSON, XML) in the request is not supported.

---

## 14. What is the `409 Conflict` status code?
**Answer:**  
The `409 Conflict` status code indicates that the request conflicts with the current state of the server. This is often used in scenarios like:
- Trying to create a resource that already exists.
- Updating a resource with outdated or conflicting data.

---

## 15. What is the `422 Unprocessable Entity` status code?
**Answer:**  
The `422 Unprocessable Entity` status code indicates that the server understands the request but cannot process it due to semantic errors. For example:
- Invalid data in the request payload.
- Missing required fields.

---

## 16. What is the `418 I'm a teapot` status code?
**Answer:**  
The `418 I'm a teapot` status code is an April Fools' joke from RFC 2324 (Hyper Text Coffee Pot Control Protocol). It is not meant to be used in real-world applications but serves as a humorous reminder of the creativity in HTTP standards.

---

This Q&A covers the most common HTTP status codes and their use cases in REST APIs. Let me know if you need further clarification or additional examples!