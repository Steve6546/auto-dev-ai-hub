export function execute(plan: any, analysis: any): string {
  const { config, round } = analysis;
  let prompt;

  if (plan.task === "Generate project brief prompt") {
    prompt = `
      Please generate a comprehensive README.md file for the project "${config.project.name}".

      Project Description: ${config.project.description}

      This README should be based on the following task:
      Task Title: ${round.title}
      Task Description: ${round.description}

      The README should include sections for:
      - Vision and Mission
      - Core Features
      - Target Platforms
      - Tech Stack
      - Getting Started
      - How to Contribute

      Target Platforms: ${JSON.stringify(config.project.targets, null, 2)}
      Preferred Tech Stack: ${JSON.stringify(config.project.tech_stack_preference, null, 2)}
    `;
  } else if (plan.task === "Generate tech stack prompt") {
    prompt = `
      As an expert software architect, design a comprehensive and well-justified tech stack for the project "${config.project.name}".

      **Project Description:** ${config.project.description}
      **Project Targets:** ${JSON.stringify(config.project.targets)}
      **Preferred Technologies:** ${JSON.stringify(config.project.tech_stack_preference)}

      **Task:** ${round.title}
      **Task Description:** ${round.description}

      Please provide the following in a well-formatted Markdown document (TECH_STACK.md):

      1.  **Recommended Tech Stack:**
          *   **Backend:** (e.g., Node.js with Express/Fastify, Python with Django/Flask)
          *   **Frontend:** (e.g., React with Electron for desktop, React for web)
          *   **Database:** (e.g., PostgreSQL, MongoDB, SQLite)
          *   **CI/CD:** (e.g., GitHub Actions, Jenkins, GitLab CI)
          *   **Infrastructure as Code (IaC):** (e.g., Terraform, AWS CDK, Pulumi)
          *   **Testing:** (e.g., Jest, Pytest, Cypress)

      2.  **Justification for Each Choice:**
          *   For each technology chosen, provide a brief but strong justification explaining why it's a good fit for this specific project, considering the project's goals of being an autonomous software development platform.

      3.  **High-Level Architecture Overview:**
          *   Provide a text-based or ASCII art diagram describing the high-level architecture.
          *   Explain how the different components (Backend, Frontend, Database, Agents) will interact with each other.

      The final output should be a single, clean Markdown file ready to be saved as \`TECH_STACK.md\`.
    `;
  } else if (plan.task === "Generate UI wireframe prompt") {
    prompt = `
      As an expert UI/UX designer, create a detailed textual wireframe for the dashboard of "${config.project.name}".

      **Project Description:** ${config.project.description}

      **Task:** ${round.title}
      **Task Description:** ${round.description}

      Please design the following components in a clear, text-based format (ASCII art is preferred for layout, but a detailed description or simple JSON is also acceptable). The output should be saved in \`ui-wires/dashboard_wireframe.md\`.

      1.  **Main Layout (ASCII Art or Description):**
          *   Show the overall layout, including the position of the Sidebar, Main Panel, and Footer.

      2.  **Sidebar Components:**
          *   Rounds: A list of project rounds (e.g., "Round 1: Docs", "Round 2: Tech Stack"). Indicate the active round.
          *   Memory: A section to show the agent's current context or memory usage.
          *   Settings: A link or button to open the settings panel.

      3.  **Main Panel Components:**
          *   **Round Status Display:**
              *   Show the title of the current round.
              *   Display the status (e.g., "In Progress", "Completed").
              *   List the key tasks or objectives for the current round.
          *   **Logs Console:**
              *   A scrollable area to display real-time logs from the agents.
              *   Include example log lines (e.g., "INFO: Generating code...", "SUCCESS: Tests passed!").

      4.  **Footer Components:**
          *   Overall Project Status (e.g., "Healthy", "Running", "Error").
          *   Current selected AI model (e.g., "Model: gemini-1.5-flash").

      The final output should be a single, clean Markdown file.
    `;
  } else {
    throw new Error(`Unsupported plan task: ${plan.task}`);
  }

  return prompt.trim();
}
