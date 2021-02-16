function createElement(data) {
	let info = document.createElement('p');
	info.innerHTML = data;
	document.body.appendChild(info);
}

function queryWikipedia(callback) {
	req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			callback(req.responseText);
		}
	}
	req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
	req.send();
}

queryWikipedia(createElement);
