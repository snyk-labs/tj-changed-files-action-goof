const core = require('@actions/core');
const github = require('@actions/github');

(async function run() {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
  } catch (error) {
    core.setFailed(error.message);
  }  
})();