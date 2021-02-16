function changeMode(size, weight, transform, background, color) {
	return function() {
		document.body.style.fontSize = size + 'px';
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}

function main() {
	let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
	let para = document.createElement('p');
	para.innerHTML = 'Welcome Holberton!';
	document.body.appendChild(para);
	let spooky_button = document.createElement('button');
	spooky_button.setAttribute('id', 'spooky');
	spooky_button.innerHTML = 'Spooky';
	document.body.appendChild(spooky_button);
	document.getElementById('spooky').onclick = spooky;
	let dark_button = document.createElement('button');
	dark_button.setAttribute('id', 'dark');
	dark_button.innerHTML = 'Dark mode';
	document.body.appendChild(dark_button);
	document.getElementById('dark').onclick = darkMode;
	let scream_button = document.createElement('button');
	scream_button.setAttribute('id', 'scream');
	scream_button.innerHTML = 'Scream mode';
	document.body.appendChild(scream_button);
	document.getElementById('scream').onclick = screamMode;
}

main();
