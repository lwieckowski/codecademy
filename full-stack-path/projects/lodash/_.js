// Codecademy Full-Stack Engineer Path, Javascript Project Lodash, L. Wieckowski 2021

_ = {
    clamp(number, lower, upper) {
	return Math.min(Math.max(number, lower), upper);
    },
    inRange(number, start, end) {
	if (end === undefined) {
	    end = start;
	    start = 0;
	}
	return (number >= start && number < end) || (number < start && number >= end);
    },
    words(string) {
	return string.split(' ');
    },
    pad(string, desiredLength) {
	const length = string.length;
	if (length > desiredLength) {
	    return string;
	} else {
	    const even = Math.floor((desiredLength - length)/2)
	    const odd = desiredLength % length;
	    const padding = size => Array(size).fill(' ').join('');
	    return padding(even) + string + padding(even + odd);
	}
    },
    has(obj, key) {
	return obj[key] != undefined;
    },
    invert(obj) {
	let newObj = {}
	for (let key in obj) {
	    newObj[obj[key]] = key;
	}
	return newObj;
    },
    findKey(obj, predicate) {
	for (const key in obj) {
	    if (predicate(obj[key])) return key;
	}
    },
    drop(arr, n) {
	return n === undefined ? arr.slice(1) : arr.slice(n);
    },
    dropWhile(arr, predicate) {
	const notPredicate = (a, b, c) => !predicate(a, b, c);
	let n = arr.findIndex(notPredicate);
	return this.drop(arr, n);
    },
    chunk(arr, size) {
	if (size === undefined) size = 1;
	let res = [];
	for (let start = 0; start < arr.length; start = start + size) {
	    res.push(arr.slice(start, start + size));
	}
	return res;
    }
}

// Do not write or modify code below this line.
module.exports = _;
