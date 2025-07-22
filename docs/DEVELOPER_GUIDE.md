# AutoDev AI Hub: Developer Guide

This guide provides a comprehensive overview of the AutoDev AI Hub project, its architecture, and how to contribute.

## 1. Project Philosophy

AutoDev AI Hub is an AI-powered autonomous software development platform. Its goal is to automate the entire software development lifecycle, from idea to deployment. The project is built on a foundation of modular agents, each responsible for a specific task (e.g., code generation, testing, documentation).

## 2. Project Architecture

The project is a monorepo containing the following key components:

-   **`src/agents`**: This directory contains the core AI agents. Each agent is a class that extends `BaseAgent` and implements a `run` method.
-   **`src/backend`**: This directory contains the backend services, including the LLM service (`llmService.ts`) and the secrets manager (`secrets-manager.ts`).
-   **`src/frontend`**: This directory contains the React/Electron frontend application.
-   **`scripts`**: This directory contains helper scripts, including the main CLI (`ai-cli.js`) and the agent runner (`run-agent.ts`).
-   **`project_tasks.yaml`**: This file defines the project's backlog and tasks for the AI agent. Each task is a "round" that the agent can execute.

## 3. Agent Lifecycle

The agent's lifecycle is orchestrated by the `run-agent.ts` script. Here's a high-level overview of how a round is executed:

1.  The user runs `node scripts/ai-cli.js run-round <roundId>`.
2.  `ai-cli.js` calls `run-agent.sh` with the round ID.
3.  `run-agent.sh` calls `run-agent.ts` using `tsx`.
4.  `run-agent.ts` reads `project_tasks.yaml` to get the details of the specified round.
5.  Based on the round, `run-agent.ts` calls the appropriate function in `specificationModule.ts` to generate a prompt for the LLM.
6.  `run-agent.ts` calls `llmService.ts` to send the prompt to the selected AI model.
7.  The response from the LLM is processed and written to the appropriate file by `docsAgent.ts` or `codeAgent.ts`.
8.  The changes are automatically committed and pushed to the repository.

## 4. How to Add a New Agent

To add a new agent, follow these steps:

1.  Create a new file in `src/agents` (e.g., `newAgent.ts`).
2.  Create a new class that extends `BaseAgent`.
3.  Implement a `run` method that takes a prompt and returns a promise that resolves with the agent's output.
4.  Add a new task to `project_tasks.yaml` that uses the new agent.
5.  Update `run-agent.ts` to handle the new round and call the new agent.
6.  Add a test file for the new agent in `src/agents/__tests__`.

## 5. Running Tests & Contributing

To run the tests, use the `npm test` command.

To contribute to the project, please see `CONTRIBUTING.md`.
