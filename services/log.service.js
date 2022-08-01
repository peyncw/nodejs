import chalk from 'chalk';
import dedent from 'dedent-js';
import { getCloudIcon } from '../helpers/iconCloud.js';

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
};

const printWeather = (data) => {
	if (!data) {
		throw new Error('No WEATHER data');
	}
	const cityName = data.name;
	const weatherDes = data.weather[0].description;
	const weather = weatherDes.charAt(0).toUpperCase() + weatherDes.slice(1);
	const temp = data.main.temp;
	const tempMin = data.main.temp_min;
	const tempMax = data.main.temp_max;
	const humid = data.main.humidity;
	const wind = data.wind.speed;
	const weatherId = data.weather[0].id;
	const cloudIcon = getCloudIcon(weatherId); //add metod cloud icon
	return dedent`City weather: ${data.name}
	${cloudIcon} ${weather}
	Temperature: ${temp} min: ${tempMin} max: ${tempMax}
	Humidity: ${humid}
	Wind speed: ${wind}	
	`;
};

export { printError, printSucces, printHelp, printWeather };