const getCloudIcon = (weatherId) => {
	if (!weatherId) {
		throw new Error('No weather ID, cloudIcon');
	}
	const id = Math.floor(weatherId/100);

	if (weatherId == 800) return '☀️';
	switch (id) {
		case 2: return '🌩️';
		case 3: return '🌧';
		case 5: return '🌦';
		case 6:	return '🌨️';
		case 7: return '🌫';
		case 8: return '🌥';
	}
};

export { getCloudIcon };