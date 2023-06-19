const http = require('http');
// console.log(http);
const port = 8000;
const fs = require('fs');

const requestHandler = (req , res)=>{
    console.log(req.url)
    res.writeHead(200 , {'content-type':'text/html'})
    
    let filePath ;
    switch(req.url){
        case '/':
            filePath = "./index.html";
            break;
        case '/about':
            filePath = "./about.html";
            break;
        default :
            filePath = "./404.html";
            break;
    }
    fs.readFile(filePath , (err , data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.end(data);
    })
}

const server = http.createServer(requestHandler);
server.listen(port , (error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server is running on port : ", port)
})
