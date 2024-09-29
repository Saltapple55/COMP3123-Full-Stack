var msg=require("./message.js")

// console.log(msg.name);
// console.log(msg.sum(5,3));
// console.log(msg.myCars);
// console.log(msg.myCars[1]);
// let mycar=new msg.Car("Mazda");
// console.log(mycar.Model());
// let myage=new msg.myClass(24);
// console.log(myage.Age());

var http = require('http');
//const { myCars } = require('./message');

// http.createServer(function (req, res){

//     //send the http header
//     /*
//     the response.writeHead() property, introduced in Node.js
//     is part of the http module. Used to sedn a response header to incoming requirest
//     status code is representaed bu a 3 digit http status code, and the headers parameter contains repsonse headers
//     optionally, human readable statusMessage
//     //Http status code(200): It accepts thatus codes that are number type
//     Content Type(text/plain): is string format (accepts 'text/html' or 'application/json;)
//     */
   
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     //send the response body as hello world
//     res.end('Hello world');
// }).listen(8081) //server object listens to port 8080
// /*IP address 127.0 0.1 is called a loopback address.
// Packet sent to this address never reach the network but are looped through interface card only 
// */
// const PORT2=process.env.PORT || 3000;

// //console.log('server running at http://127.0.0.1:8081/')
// //create http server
// var httpServer2= http.createServer(
// function (req,res){
//     const body='<h1>hello COMP3123</h1>';
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(body)

// }
// );
// //listening to http Server (assigning port to the server)
// httpServer2.listen(PORT2,
//     ()=>{
//         console.log('Server running at http://127.0.0.1:3000')
//     }
// );
// const PORT2=process.env.PORT || 3000;
// var httpServer3= http.createServer(
// function (req,res){
//     res.write('Hello world')
//     res.end(body)

// }
// );
// //listening to http Server (assigning port to the server)
// httpServer3.listen(PORT2,
//     ()=>{
//         console.log('Server running at http://127.0.0.1:3000')
//     }
// );

// var myCars=["Mazda", "BMW", "Toyota", "Ford"]
// http.createServer(function(req,res){
//     if(req.url=="/"){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.end('Welcome')
//     }
//     if(req.url=="/hello"){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.end('<h1>Hello World</h1>')
//     }
//     if(req.url=="/name"){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.end('<h1>Audrey</h1>')
//     }
//     if(req.url=="/cars"){
//         res.setHeader('Content-Type','application/json;charset=utf-8');
//         res.end(JSON.stringify(myCars))
//     }
//     if(req.url=="/carssort"){
//         res.setHeader('Content-Type','application/json;charset=utf-8');
//         s=myCars.sort()
//         res.end(JSON.stringify(s))
//     }
//     if(req.url=="/carssort"){
//         res.setHeader('Content-Type','application/json;charset=utf-8');
//         s=myCars.reverse()
//         res.end(JSON.stringify(s))
//     }


            
// }

// ).listen(8082)
// console.log('Server running at http://127.0.0.1:8082')


let person=[
    {id:1, firtname: "Audrey", lastname: 'Doe', age:40, job: 'IT'},
    {id:1, firtname: "Bob", lastname: 'Doe', age:20, job: 'IT'},
    {id:1, firtname: "Charlie", lastname: 'Doe', age:55, job: 'IT'}

]


const PORT4=process.env.PORT || 8082;
var httpServer4= http.createServer(
function (req,res){
    
    if(req.url=="/d"){
         res.setHeader('Content-Type','application/json;charset=utf-8');
        res.end(JSON.stringify(person))

             }

}
);
//listening to http Server (assigning port to the server)
httpServer4.listen(PORT4,
    
);

