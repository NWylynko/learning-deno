
const url = `https://api.github.com/users/nwylynko`

const response = await fetch(url);

const body = await response.json();

console.log(body);
