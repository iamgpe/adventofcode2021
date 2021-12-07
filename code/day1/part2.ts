import input from '../../inputs/day1';

let increased = 0;
let decreased = 0;
let unchanged = 0;
let output = '';

for (let i = 0; i < input.length; i++) {
    const sum = input[i] + input[i+1] + input[i+2];
    const previousSum = input[i-1] + input[i] + input[i+1];

    if (sum) {
        if (!previousSum) {
            output += sum + ' (N/A - no previous sum)\n';
        } else if (sum > previousSum) {
            output += sum + ' (increased)\n';
            increased++;
        } else if (sum < previousSum) {
            output += sum + ' (decreased)\n';
            decreased++;
        } else {
            output += sum + ' (no change)\n';
            unchanged++;
        }
    }
}

console.log('Response: ' + increased + ' increased | ' + decreased + ' decreased | ' + unchanged + ' unchanged\n');
console.log(output);
