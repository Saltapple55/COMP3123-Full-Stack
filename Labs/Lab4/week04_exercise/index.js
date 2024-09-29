const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const SERVER_PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello Express JS</h1>');
});

app.get('/user', (req, res) => {
    console.log(req.query)
    if(req.query.firstname===undefined) req.query.firstname="pritesh";
    if (req.query.lastname===undefined) req.query.lastname='patel';

        const firstname = req.query.firstname;
        const lastname = req.query.lastname;

        // res.type('html');
        res.setHeader('Content-Type', 'application/json');
        res.status(201)
            .send(JSON.stringify(req.query));
        
        //    .send(`<h1>Products Query Parameter</h1>
        //         <p>First Name: ${firstname}</p>
        //     <p>Last Name: ${lastname}</p>`);
    }
)
app.post('/user/:firstname/:lastname', (req, res) => {
    const user = req.params;
    console.log(user);
    res.type('json');
    res.json(user);
    //res.send(JSON.stringify(req.params));
})
    //res.setHeader('Content-Type', 'application/json');

// // http://localhost:3000/contact?name=John&email=john@gmail
// app.post('/contact', (req, res) => {
//     console.log(`POST Query: ${JSON.stringify(req.query)}`);
//     console.log(`POST Body: ${JSON.stringify(req.body)}`);
//     //res.send('<h1>Contact Us</h1>');
//     res.send(req.query);
// })

// Route Parameters
// http://localhost:3000/products/shoes/blue


// Body Object
// Post Request
// http://localhost:3000/products
// app.post('/products', (req, res) => {
//     const products = req.body;
//     console.log(products);
//     res.type('json');
//     // res.setHeader('Content-Type', 'application/json');
//     res.json(products);
//     //res.send('<h1>Products Post</h1>');
// })

// PUT Request and body object
// http://localhost:3000/products/1

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const products = req.body;
    console.log(products);
    res.send(`<h1>Product ID to PUT</h1>
            <p>ID: ${id}</p>`);
})

// http://localhost:3000/products/1
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`<h1>Product ID to DELETE</h1>
            <p>ID: ${id}</p>`);
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
})