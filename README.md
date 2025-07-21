# AutoDev AI Hub

## Getting Started

1. Clone repo
2. Install dependencies: `npm install`
3. Build & lint: `npm run lint && npm run build`
4. تشغيل محلي عبر Docker Compose: `docker-compose up --build`
5. الاطلاع على الواجهة على http://localhost:3000

## Batches

- Batch 1: Initial scaffolding
- Batch 2: CI/CD, linting, Docker & Infra stubs
- Batch 3: API endpoints, Env vars & Secrets, Logging, Metrics, Testing
- Batch 4: AI Integration, Context Management, Agents Workflow, Error Handling, Integration Tests, Secrets Management

## AI Integration

To use the AI features, you need to add your OpenAI API key to the `.env` file:

```
OPENAI_API_KEY=your-api-key
```

## Running integration tests

To run the integration tests, use the following command:

```bash
npm test
```

## Running the server

To run the backend server, use the following command:

```bash
npm run start:backend
```

## Running tests

To run the tests, use the following command:

```bash
npm test
```

## Accessing metrics

The metrics are available at `http://localhost:4000/metrics`.
