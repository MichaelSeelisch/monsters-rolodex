// Requiring modules we are going to use later
const inquirer = require("inquirer");
const util = require("util");
const execSync = util.promisify(require("child_process").execSync);

// Create the question prompter
const prompt = inquirer.createPromptModule();

// Get the build argument that we want to execute after the prompt
const finalBuild = process.argv[2];

// Set up choices
const choices = ["EN", "FR", "BR", "UA", "CA"];
choices.push(new inquirer.Separator());
if (!process.env.REACT_APP_TARGET) {
	// Run the question prompt
  	prompt([
		{
			type: "rawlist",
			name: "env",
			message: "Which target do you want to build?",
			choices
		}
  	]).then(answers => {
		// Once answered, set the environment variable
		process.env.REACT_APP_TARGET = answers.env;
		console.log("Starting " + process.env.REACT_APP_TARGET + " build..");

		// execute the build argument
		execSync(finalBuild, {
			stdio: "inherit"
		});
  	});
} else {
	// If the variable is already set, just build the target
	console.log("Building " + process.env.REACT_APP_TARGET + "..");
	execSync(finalBuild, { stdio: "inherit" });
}