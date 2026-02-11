FROM oven/bun:latest
WORKDIR /app
COPY . .
EXPOSE 8000
ENTRYPOINT ["bun", "run", "index.ts"]
