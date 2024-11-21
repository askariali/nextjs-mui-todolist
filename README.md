# Todo App

This is a [Next.js v15](https://nextjs.org) project bootstrapped with [`create-next-app@latest`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses the below technologies:
- PNPM: Package Manager
- Material-UI + TailwindCSS: Styling Tools
- Zustand: Application State Manager
- Docker: Container Management Tool
- Testing-Library + Vitest: Testing

## Development

You'll need **Node.js v18.18.x** installed before starting development.

```bash
# First, install dependencies
pnpm i

# Then, run the development server
pnpm dev
```

## Run Tests

```bash
# Show test coverage
pnpm test:coverage

# Show tests visually in browser
pnpm test:ui                    # The browser will automatically open at http://localhost:51204
```

## Production
You can run the production-ready docker image using these commands:

_* Note: Make sure you have Docker installed on your machine._
```bash
# Build the docker container
docker build -t <IMAGE NAME> .

# Run the container
docker run -p 3000:<YOUR DESIRED PORT> <IMAGE NAME>
```
