const { parseAllRedirects } = require("netlify-redirect-parser");
const core = require("@actions/core");
const path = require("path");

/**
 * Check devopsdays redirects file for errors
 */

const redirectFilePath = path.resolve(path.resolve("static"), "_redirects");

async function run() {
  try {
    core.debug(`Checking redirect file in ${redirectFilePath}`);
    const { redirects, errors } = await parseAllRedirects({
      redirectsFiles: [redirectFilePath],
    });

    const errorMessage = function ({ message }) {
      return message;
    };

    if (errors) {
      throw new Error(errors.map(errorMessage).join("\n\n"));
    }

    core.debug(redirects);

  } catch (errors) {
    core.setFailed(errors.message);
  }
}

run();
