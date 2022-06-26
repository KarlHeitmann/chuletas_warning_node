const { exec } = require('child_process');

//const gitDiffResponse = (err, stdout, stderr) => {
function gitDiffResponse(err, stdout, stderr) {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(stdout);
}

function main() {
  const cmd1 = 'git diff --cached --name-only --diff-filter=ACM'
  exec(cmd1, gitDiffResponse);
}


main();

