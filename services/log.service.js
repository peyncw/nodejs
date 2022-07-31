import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSucces = (message) => {
	console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan('HELP')}
		Without Parameters - Weather Output
		-s [CITY] set city
		-h help
		-t [API_KEY] save token
		`
	);
}

export { printError, printSucces, printHelp };