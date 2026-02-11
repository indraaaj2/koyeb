FROM oven/bun:latest
WORKDIR /
COPY . .
EXPOSE 8000
ENTRYPOINT ["bun", "run", "index.js"]
