#!/usr/bin/env node

import { Command } from "commander";
import { createProject, promptForOptions } from "./commands/create";
import { logger } from "./utils/logger";

const program = new Command();

program
  .name("kinetoStack")
  .description("CLI tool to scaffold kinetoStack templates")
  .version("0.1.0");

program
  .command("create")
  .argument("<project-name>", "Name of the project to create")
  .description("Create a new project from a kinetoStack template")
  .action(async (projectName: string) => {
    try {
      const options = await promptForOptions(projectName);
      await createProject(options);
    } catch (error) {
      logger.error(
        `Failed to create project: ${error instanceof Error ? error.message : String(error)}`
      );
      process.exit(1);
    }
  });

program.parse();
