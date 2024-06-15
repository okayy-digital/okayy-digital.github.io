const getJson = '/json/stories.json';
const display = document.querySelector('#story-container');
const input = document.querySelector('#story-search');

const getData = async () => {
	const res = await fetch(getJson);
	const data = await res.json();
	return data
}

const displayResults = async () => {
	let query = input.value;
	console.log('query::', query);
}