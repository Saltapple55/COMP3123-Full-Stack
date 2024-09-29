var http = require("http");
var emp= require("./Employee.js")
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8662


//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error no get": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
                    res.writeHead(200, {'Content-Type': 'text/html'})
         res.end("<h1>Welcome to Lab Exercise 03</h1>")

            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        }
        else if (req.url === '/employee') {
            res.writeHead(200, {'Content-Type': 'text/html'})

            let deets=emp.details()
            res.end(deets)
            //TODO - Display all details for employees in JSON format
        }

        else if (req.url === '/employee/names') {
            res.writeHead(200, {'Content-Type': 'text/html'})

            let deets=emp.orderedNames()
            res.end(deets)
 
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        }

        else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, {'Content-Type': 'text/html'})

            let deets=emp.totalSalary()
            res.end(`<h1>Total Employee Salary </h1> <br><p>${deets}</p>`)
 
        
        }   

        else          res.end(`{"error": "${http.STATUS_CODES[404]}"}`)

    
    
        }
        // res.writeHead(404,{'Content-Type': 'application/json'} )
   
    
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})