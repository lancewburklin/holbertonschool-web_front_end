let stock = {
	macbook: 2,
	iphone: 4
};

function processPayment(itemName) {
	console.log(`Payment is being processed for item ${itemName}`);
	stock[itemName] = stock[itemName] - 1;
}

function processError(itemName) {
	console.log(`No more ${itemName} in stock`);
	console.log(`Payment is not being processed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
	console.log(`Verifying the stock of ${itemName}`);
	if (stock[itemName] > 0) {
		callbackPayment(itemName);
	}else
	{
		callbackError(itemName);
	}
}

let thing = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
thing = thing.toLowerCase();
processOrder(thing, processPayment, processError);
