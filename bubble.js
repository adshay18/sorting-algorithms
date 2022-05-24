function bubbleSort(arr) {
	let swapped = false;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			let temp = arr[j];
			if (arr[j] > arr[j + 1]) {
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (swapped === false) break;
	}
	return arr;
}

module.exports = bubbleSort;
