const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) =>{
    if(req.url=="/")
    {
        fs.readFile('filesystem/file.txt', 'utf8', (err, data) =>
        {
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File Content: ' + data);
        })
    }
     
});

const port = 99;//Change port number if you want.
server.listen(port, () => console.log(`Server listening on port ${port}`));