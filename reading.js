const http = require('http');
const fs = require('fs');

const server = https.createServer((req, res) => {
    if (req.url == "/") {
        try {
            const data = fs.readFileSync('filesystem/file.txt', 'utf8');
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
           
            res.end('File Content: ' + data);
        } catch (err) {
            console.error('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    }
});

const port = 200;//Change port number if you want.
server.listen(port, () => console.log('Listening on port ' + port));
