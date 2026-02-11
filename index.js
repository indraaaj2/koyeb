const server = Bun.serve({
  port: 8000,
  async fetch(request) {
    const url = new URL(request.url);

    // Route for IPv4 Egress IP
    if (url.pathname === "/ip") {
      try {
        // Using ipv4.icanhazip.com forces an IPv4 response
        const response = await fetch("https://ipv4.icanhazip.com");
        const ipv4 = await response.text();
        return new Response(ipv4.trim());
      } catch (err) {
        return new Response("Error fetching IPv4", { status: 500 });
      }
    }

    // Default Route
    return new Response("Hello from Indrajeet");
  },
});

console.log(`Listening on localhost:${server.port}`);
