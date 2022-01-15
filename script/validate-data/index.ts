import { endGroup, error, info } from '@actions/core';

interface WorkflowWithErrors {
  id: string;
  name: string;
  errors: string[];
}

(async function main() {
  try {
    info("🎉🤘 - Found no workflows with errors!")

  } catch (e) {
    error(`Unhandled error while synching workflows: ${e.message}`);

  }
})();