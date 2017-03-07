var arr = [16, 9, 86, 48, 59, 2, 78, 240, 18];

var min = arr[0];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {

    if (min > arr[i]) {
        min = arr[i];
    }

    if (max < arr[i]) {
        max = arr[i];
    }
}

console.log("Min = " + min + ", Max = " + max);
