function findMax(arr) {
    let big = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > big) big = arr[i]; 
    }
    return big;
}

let arr = [12,31, 100, 10, 23, 324, 24];
if (arr.length > 0) {
    let m = findMax(arr);
    console.log(m);
}
