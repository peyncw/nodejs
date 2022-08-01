#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveValue = async (value, nameValue) => {
	if (!value.length) {
		printError(`${nameValue} not transferred`);
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY[nameValue], value);
		printSucces(`${nameValue} saved`);
	} catch (e) {
		printError(e.message);
	}
}

const saveToken = async (token) => {
	await saveValue(token, TOKEN_DICTIONARY.token);
};


const saveCityName = async (cityName) => {
	await saveValue(cityName, TOKEN_DICTIONARY.city);
}


const getForcast = async () => {
	try {
		const cityName = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(cityName);
		printSucces(printWeather(weather));
	} catch (e) {
		if (e?.response?.status == 404) {
			printError('City not found');
		} else if (e?.response?.status == 401) {
			printError('Incorrect token');
		} else {
			printError(e.message);
		}
	}

}

const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCityName(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	getForcast();

};

initCLI();