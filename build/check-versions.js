// fancy terminal
var chalk = require('chalk')
// figure version
var semver = require('semver')
// checking packageconfig
var packageConfig = require('../package.json')

// execute command
function exec (cmd) {
  // require child_process, then exec sync, cmd, to string, no space
  return require('child_process').execSync(cmd).toString().trim()
}

// version is array
var versionRequirements = [
  {
    // it is node, >= 4.0.0
    name: 'node',
    // >= 4.0.0, remove >=
    currentVersion: semver.clean(process.version),
    // get node requirement
    versionRequirement: packageConfig.engines.node
  },
  {
    // it is npm, >= 3.0.0
    // use npm --version
    name: 'npm',
    currentVersion: exec('npm --version'),
    //
    versionRequirement: packageConfig.engines.npm
  }
]

// export a func
module.exports = function () {
  // no warn
  var warnings = []
  // each requirement
  for (var i = 0; i < versionRequirements.length; i++) {
    // each one
    var mod = versionRequirements[i]
    // use semver to check, curr and version required
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      // warning push
      warnings.push(mod.name + ': ' +
        // chalk red
        chalk.red(mod.currentVersion) + ' should be ' +
        // chalk green
        chalk.green(mod.versionRequirement)
      )
    }
  }

  // print error
  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
