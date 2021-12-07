import input from '../../inputs/day1';

let increased = 0;
let decreased = 0;
let output = '';

for (let i = 0; i < input.length; i++) {
    if (i === 0) {
        output += input[i] + ' (N/A - no previous measurement)\n';
    } else {
        if (input[i] > input[i-1]) {
            output += input[i] + ' (increased)\n';
            increased++;
        } else {
            output += input[i] + ' (decreased)\n';
            decreased++;
        }
    }
}

console.log('Response: ' + increased + ' increased | ' + decreased + ' decreased');
console.log(output);
