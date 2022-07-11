// http module
const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  })
  // if(req.url === '/'){
  //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content) =>{
  //         if(err){
  //             throw err
  //         }
  //         res.end(content)
  //     })
  // } else if(req.url === '/about'){
  //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content) =>{
  //         if(err){
  //             throw err
  //         }
  //         res.end(content)
  //     })
  // }

  let filepath = path.join( __dirname,"public",req.url === "/" ? "index.html" : req.url);

  let ContentType = 'text/html'
  let ext = path.extname(filepath)
  if(!ext){
    filepath += '.html'
  }

  switch(ext){
    case '.css':
        ContentType = 'text/css'
        break
    case '.js':
        ContentType = 'text/javascript'
        break
    default:
        ContentType = 'text/html'
  }
  fs.readFile(filepath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"),(err, data) => {
          if (err) {
            res.writeHead(500);
            res.end("Error!");
          } else {
            res.writeHead(404, 
                {'Content-type': ContentType}
                )
                res.end(data)
          }
        }
      );
    } else {
        res.writeHead(200,
    {'Content-Type': ContentType})
    
    res.end(content)
        }

})

})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
