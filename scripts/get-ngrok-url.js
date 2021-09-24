const http = require('http');

// Super simple script to get ngrok url
setTimeout(() => {
    http.get('http://127.0.0.1:4040/api/tunnels', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            JSON.parse(data).tunnels.map(({ public_url }) => console.log('URL:', public_url));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}, 1000);
