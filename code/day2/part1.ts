import {createInterface} from 'readline';
import {createReadStream} from 'fs';
const path = require('path');

let forward = 0;
let down = 0;
let up = 0;

const lines = createInterface({
    input: createReadStream(path.resolve(__dirname, '../../inputs/day2.txt'))
});

lines.on('line', (line) => {
    const [key, value] = line.split(' ');

    if (key === 'forward') {
        forward += parseInt(value);
    }

    if (key === 'down') {
        down += parseInt(value);
    }

    if (key === 'up') {
        up += parseInt(value);
    }
}).on('close', () => {
    console.log(forward * (down - up));
});
