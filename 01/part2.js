const readInputFileLineByLine = require("../utils/read_input_file_line_by_line");

let maxCalories = [0, 0, 0];
let currentCalories = 0;

readInputFileLineByLine((line) => {
    if (line) {
        // a line with calories number: sum all together
        const numberCalories = Number(line);
        currentCalories += numberCalories;
    } else {
        // empty line: check if current > any of 3 max and if yes, update max
        for (let i = 0; i < maxCalories.length; i++) {
            const max = maxCalories[i];
            if (currentCalories > max) {
                if (i < maxCalories.length - 1) maxCalories[i + 1] = maxCalories[i];
                maxCalories[i] = currentCalories;
                break;
            }
        }
        currentCalories = 0;
        console.log({maxCalories});
    }
});
const totalMaxCalories = maxCalories.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log({totalMaxCalories});
