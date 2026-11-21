AgentForge

<p align="center">
  <strong>Build. Connect. Automate. Deploy.</strong>
</p>

<p align="center">
  A full-stack AI Agent SaaS platform for building intelligent agents, orchestrating multi-agent workflows, and automating tasks with AI-powered browser capabilities.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Framework-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-UI-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Browserbase-Browser%20Automation-green" />
  <img src="https://img.shields.io/badge/Package%20Manager-pnpm-orange?logo=pnpm" />
</p>

Overview

AgentForge is an AI-powered platform that simplifies the creation, orchestration, and deployment of intelligent AI agents.

The platform provides an environment where users can create custom agents, connect them into collaborative workflows, automate repetitive operations, and leverage browser automation to interact with web applications.

Whether you're building a personal AI assistant, automating business processes, or developing complex multi-agent systems, AgentForge provides the foundation to turn AI ideas into practical solutions.

Key Features

AI Agent Builder — Create and configure intelligent agents for specific tasks and objectives.

Multi-Agent Orchestration — Coordinate multiple agents to collaborate on complex workflows.

Workflow Automation — Design automated processes that connect agents, tools, and external services.

Browser Automation — Enable agents to interact with websites through Browserbase.

AI Website Bots — Build intelligent bots to assist website visitors and automate interactions.

Centralized Dashboard — Manage agents, workflows, and execution activities from one interface.

Authentication & User Management — Provide secure access to the platform.

Scalable SaaS Architecture — Build a foundation for expanding AI-powered automation services.

Technology Stack

Technology

Description

Next.js

Full-stack application framework

React

Component-based user interface

TypeScript

Type-safe development

Tailwind CSS

Modern and responsive styling

Browserbase

Cloud browser automation infrastructure

AI / LLM APIs

Intelligent agent capabilities

pnpm

Fast and efficient package management

Architecture

AgentForge is designed around three core layers:

                 AGENTFORGE
                      |
          +-----------+-----------+
          |           |           |
       Agents      Workflows    Dashboard
          |           |           |
          +-----------+-----------+
                      |
               AI Orchestration
                      |
          +-----------+-----------+
          |           |           |
         LLMs      Browserbase   Tools
          |           |           |
          +-----------+-----------+
                      |
               Task Execution

Getting Started

Prerequisites

Make sure you have installed:

Node.js (LTS recommended)

pnpm

Git

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/AgentForge.git

cd AgentForge

2. Install dependencies

pnpm install

3. Configure environment variables

Create a .env.local file in the root directory:

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Browserbase
BROWSERBASE_API_KEY=
BROWSERBASE_PROJECT_ID=

# AI Provider
OPENAI_API_KEY=

Add the environment variables required by your integrations. Never commit your actual API keys or secrets.

4. Start the development server

pnpm dev

Open your browser and navigate to:

http://localhost:3000

5. Build for production

pnpm build

6. Run the production server

pnpm start

Project Structure

AgentForge/
├── app/                 # Application routes and pages
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and shared services
├── public/              # Static assets
├── types/               # TypeScript definitions
├── .env.example         # Environment variable template
├── package.json
├── pnpm-lock.yaml
└── README.md

The structure is a reference and should be adjusted to reflect the actual repository.

Roadmap

Authentication and user dashboard

Custom AI agent creation

Agent configuration and management

AI model integration

Multi-agent orchestration

Visual workflow builder

Browser automation with Browserbase

AI-powered website bots

Workflow execution monitoring

Agent execution history

Third-party integrations

Subscription and billing management

Screenshots

Add screenshots of your application to showcase its interface and functionality.

![AgentForge Dashboard](./public/screenshots/dashboard.png)

Contributing

Contributions, suggestions, and feature requests are welcome.

Fork the repository.

Create a feature branch:

git checkout -b feature/your-feature

Commit your changes:

git commit -m "feat: add your feature"

Push your branch:

git push origin feature/your-feature

Open a Pull Request.

Security

Keep API keys and credentials in environment variables.

Never commit .env.local or other files containing secrets.

Report security vulnerabilities privately to the repository maintainer.

License

This project is distributed under the MIT License. See the LICENSE file for more information.

<p align="center">
  <strong>AgentForge</strong>
  <br/>
  Build intelligent agents. Orchestrate workflows. Automate everything.
</p>
