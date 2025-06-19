#!/usr/bin/env node

import { runCLI } from './cli';

async function main(): Promise<void> {
  try {
    await runCLI();
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

main();