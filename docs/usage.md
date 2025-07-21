# Usage

This document explains how to use the AutoDev AI Hub project.

## Environment Variables

The following environment variables are used in this project:

- `PORT`: The port the backend server will run on.
- `AGENT_TIMEOUT`: The timeout for the AI agents.
- `OPENAI_API_KEY`: Your OpenAI API key.
- `SSH_HOST`: The host for the production server.
- `SSH_USERNAME`: The username for the production server.
- `SSH_KEY`: The SSH key for the production server.

## Running the Services

To run all the services, use the following command:

```bash
docker-compose up
```

## Running the Agents

To run the agents, you need to send a POST request to the `/run` endpoint of the backend server.

## Monitoring the System

The following services are available for monitoring the system:

- **Prometheus:** http://localhost:9090
- **Grafana:** http://localhost:3001
- **Loki:** http://localhost:3100
