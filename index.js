const { parseAllRedirects } = require("netlify-redirect-parser");
const core = require("@actions/core");
const path = require("path");

/**
 * Check devopsdays redirects file for errors
 */

async function run() {
  try {
    const { redirects, errors } = await parseAllRedirects({
      redirectsFiles: [path.resolve(path.resolve("static"), "_redirects")],
    });

    const errorMessage = function ({ message }) {
      return message;
    };

    if (errors) {
      throw new Error(errors.map(errorMessage).join("\n\n"));
    }
  } catch (errors) {
    core.setFailed(errors.message);
  }
}

run();
