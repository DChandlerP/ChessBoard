const xsize = parseInt(prompt("Enter the size of the Horizontal Axis that's between 0-9 inclusive "));
const ysize = parseInt(prompt("Enter the size of the Vertical Axis that's between 0-9 inclusive "));
let output = "";
console.log(createBoard(output));

function createBoard(output) {
    for (let x_axis = 0; x_axis < ysize; x_axis++){
        for (let y_axis = 0; y_axis < xsize ; y_axis++) ((x_axis + y_axis) & 1) === 1 ? output+= "#" : output += " ";
        output += "\n";
    }
    return output
}

