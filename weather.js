#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
	console.log('started', process.argv);
	console.log(getArgs(process.argv));
};

initCLI();