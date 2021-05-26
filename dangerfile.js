const {danger, fail} = require('danger');

const jsModifiedFiles = danger.git.modified_files.filter(
    path => path.startsWith('src') && path.endsWith('js')
  )
  
// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes("changelog.md")

if (!hasChangelog) {
    fail("Please add a changelog entry for your changes.")
}

if (danger.github.pr.title.includes("WIP")) {
    warn("PR is considered WIP")
  }

// const packageChanged = danger.git.modified_files.includes('package.json');
// const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
// if (packageChanged && !lockfileChanged) {
//   const message = 'Changes were made to package.json, but not to yarn.lock';
//   const idea = 'Perhaps you need to run `yarn install`?';
//   warn(`${message} - <i>${idea}</i>`);
// }
console.log('danger.github:',danger);