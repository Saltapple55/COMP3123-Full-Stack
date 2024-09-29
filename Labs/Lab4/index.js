// const fs = require('fs')
// // //Async - preferred
// // fs.readFile("input.txt", function(err, data){
// // if (err){
// //     return console.error(err)
// // }
// // console.log("Asynchronous read: "+data.toString())
// // });
// // //sync
// // const data = fs.readFileSyn('input.txt');
// // console.log("Synchronous read: " +data.toString())    

// //opening a file - 
// //fs.open()to create, read, or write a file - many operations
// //fs.readFile() - only reading .writeFile() - for writing
// //fs.open(path, flags, mode, callback)
// //parameters: 
// //fd is file descriptive-integer vvalues
// // //async opening files
// // console.log("opening file!")
// // let myFile=fs.open("input.txt", "r+", function (err, fd){
// //     if(err){
// //         return console.error(err)

// //     }
// //     console.log("file open successfully: "+fd)
// // })

// //to read, need to open, then buffer -buffer is data that will be written to, -store data temporarily
// //offset, offset in buffer to start writing at-the first index to start writing
// //length- how many bytes to read
// //position.- this is n integer specifying where to begin reading fro the file
// // fs = require('fs');
// // const buf = new Buffer(1024)//preserve location on memory with size 1028
// // console.log("opening file!")
// // let myFile=fs.open("./Lab4/input.txt", "r+", function (err, fd){
// //     if(err){
// //         return console.error(err)

// //     }
// //     console.log("file open successfully: "+fd)
// //     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
// //         if(err) console.log(err);
// //         if (bytes>0){{
// //             //print only read 
// //             console.log(buf.slice(0, bytes).toString())
// //         }}

// //     })

// // })
// //readfile without buffer or descriptive
// // fs.readFile('./Lab4/input.txt', 'utf8',(err, data)=>{
// //     if(err){
// //              console.error(err)
        
// //              }
// //     console.log(data)
// // })
// // fs.readFile('./Lab4/data.json', 'utf8', (err, data)=>{
// //     if(err){
// //              console.error(err);
        
// //              }
// //              const json=JSON.parse(data)
// //     console.log(json)
// // })

// // fs.writeFile("./Lab4/input.txt", "My new writing inside input.txt", "utf8", function (err){
// //     if(err) console.error(err);
// //     console.log("written")

// // })

// let data = "\n New line to be added"
// fs.appendFile("./Lab4/input.txt", data, "utf8", function (err){
//     if(err) console.error(err);
//     console.log("appended")

// })
// let data2 = "\nAnother New line to be added"

// fs.appendFileSync("./Lab4/input.txt", data2, "utf8", function (err){
//     if(err) console.error(err);
//     console.log("appended")

// })
// //cannot close file if did not open
// file_descriptor=fs.openSync("./Lab4/input.txt")
// console.log("fun opened")

// //file close takes file descriptor, and then error

// fs.close(file_descriptor, function(err){
//     if(err) console.error(err);
//     console.log("closed")

// })
// console.log("delete an existing file")
// fs.unlink("./Lab4/temp.txt", function(err){
//     if(err) console.error(err);
//     console.log("deleted")

// })
// //cannot fs.readFile html- will need to create as a response in server first
// // const http=require('http')
// // http.createServer(
// //     fs.readFile('index.html')
// // )
// const http=require('http')
// http.createServer(function (req, res){
//     var q = url.parse(req.url, true) //creates query, parse address with url.parse(0 method and return url object)
//     var filename = "."+q.pathname;
//     fs.readFile('index.html', function(err, data){
//         if(err){
//             res.writeHead(404, {'Content-Tyle'})
//         }
//     })
// }
// )


