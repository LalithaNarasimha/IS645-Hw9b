// Load the Express, multer and bodyParser package as a module
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

// Access the exported service
const app = express();
const upload = multer();
// Access the JSON parsing service
const jsonParser = bodyParser.json();

app.use(express.static("public"));
app.use(express.static("css"));

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

//for ex1
app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1",upload.array(), (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`);
});

//for ex2.js
app.get("/ex2", (request, response) => {
    response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/api/countries",jsonParser, (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const number = request.body.countries.length;
    response.send(`Your name is ${name} and you visited ${number} countries. Keep Travelling!`);
});

//for ex3.js
app.get("/ex3", (request, response) => {
    response.sendFile(`${__dirname}/views/ex3.html`);
});

const array = [];
app.post("/articles",upload.array(), (request, response) => {
    console.log(request.body);
    const title = request.body.title;
    const content = request.body.content;
    
    const article = {title: title, content: content}
    array.push(article);
    response.send(`New article added successfully with title "${title}" and ID ${array.length}!`);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
  });