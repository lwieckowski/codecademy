const locations = ['a dark room', 'a dark forest', 'a deserted village',
		   'an abandoned house', 'an abandoned hospital'];

const companions = ['strangers', 'soldiers', 'the walking dead', 'your friends'];

const items = ['gun', 'eye', 'leg', 'arm', 'tooth', 'nail', 'foot'];


const pickRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateMessage = () => {
    const part1 = `You wake up in ${pickRandom(locations)}, `;
    const part2 = `surrounded by ${pickRandom(companions)}. `;
    const part3 = `You notice that your ${pickRandom(items)} is gone. `;
    const part4 = `What do you do?`;
    return part1 + part2 + '\n' + part3 + '\n' + part4
}

console.log(generateMessage());
