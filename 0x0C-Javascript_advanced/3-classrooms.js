function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function() {return seat};
	}
	let students = [];
	let i = 0;
	for (i = 0; i < numbersOfStudents; i++) {
		students.push(studentSeat(i + 1));
	}
	return students;
}

let classRoom = createClassRoom(10);
