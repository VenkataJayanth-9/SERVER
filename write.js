const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = "Hello this is Jayanth";
        fs.writeFile("filesystem/file.txt", message, 'utf8', (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
                return;
            }
            console.log("File writing operation is completed");
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("File writing operation is completed");
        })
    }
});

const port = 3000; // Change to a different port number if needed
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
