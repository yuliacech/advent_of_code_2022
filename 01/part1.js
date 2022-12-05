const readInputFileLineByLine = require('../utils/read_input_file_line_by_line');

let maxCalories = 0;
let currentCalories = 0;
readInputFileLineByLine((line) => {
    console.log({line});
    if (line) {
        // a line with calories number: sum all together
        const numberCalories = Number(line);
        currentCalories += numberCalories;
    } else {
        // empty line: check if current > max and if yes update max
        if (currentCalories > maxCalories) {
            maxCalories = currentCalories;
        }
        currentCalories = 0;
    }
});
console.log({maxCalories});
