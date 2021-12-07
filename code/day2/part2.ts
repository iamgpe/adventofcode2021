import {createInterface} from 'readline';
import {createReadStream} from 'fs';
const path = require('path');

let aim = 0;
let horizontal = 0;
let depth = 0;

const lines = createInterface({
    input: createReadStream(path.resolve(__dirname, '../../inputs/day2.txt'))
});

lines.on('line', (line) => {
    const [key, value] = line.split(' ');

    if (key === 'forward') {
        horizontal += parseInt(value);
        depth += aim * parseInt(value);
    }

    if (key === 'down') {
        aim += parseInt(value);
    }

    if (key === 'up') {
        aim -= parseInt(value);
    }
}).on('close', () => {
    console.log(horizontal * depth);
});
