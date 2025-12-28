
const http = require('http');
const httpProxy = require('http-proxy');

// Create the proxy server
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Use a header to define the destination, or hardcode your broker's URL
  const target = req.headers['x-target-url'] || 'https://google.com';

  console.log(`[${new Date().toISOString()}] Proxying to: ${target}`);

  proxy.web(req, res, { target: target, changeOrigin: true }, (err) => {
    console.error('Proxy Error:', err);
    res.writeHead(502);
    res.end('Proxy Error: ' + err.message);
  });
});

// Northflank uses the PORT environment variable
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Northflank Proxy running on port ${port}`);
});
