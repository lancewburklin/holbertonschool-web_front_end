function countPrimeNumbers() {
	let count = 0;
	function test_prime(n) {
		if (n === 2) {
			return true;
		}
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}
	for (let num = 2; num < 101; num++) {
		if (test_prime(num)) {
			count += 1;
		}
	}
	return count;
}

const t0 = performance.now();
for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}
const t1 = performance.now();
total = t1 - t0;
console.log('Execution time of calculating prime numbers 100 times was ' + total + ' milliseconds.');
