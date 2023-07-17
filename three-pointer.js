function threePointerExample() {
    let colors = [2, 1, 1, 0, 0];
    let red = 0;
    let white = 0;
    let blue = colors.length - 1;

    //the value at pointer white is always compared
    //for red blue or white
    while (white <= blue) {
        //if value is 1 make no changes
        if (colors[white] == 1) white++;
        //if value is 0 swap from left values
        else if (colors[white] == 0) {
            [colors[red], colors[white]] = [colors[white], colors[red]];
            white++;
            red++;
        }
        //if value is 2 swap from right values
        else if (colors[white] == 2) {
            [colors[white], colors[blue]] = [colors[blue], colors[white]];
            blue--;
        }
    }
}