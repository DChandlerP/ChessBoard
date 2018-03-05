const size = prompt("Enter the size of the chessboard you require");
let Output = "";
for (let x_axis = 0; x_axis < size; x_axis++){
    for (let y_axis = 0; y_axis < size ; y_axis++) ((x_axis + y_axis) & 1) === 1 ? Output+= "#" : Output += " ";
    Output += "\n";
}
console.log(Output);