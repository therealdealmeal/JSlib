arrIntegers = [1,3,2,2];
k = 4;

function arrayPairSum(arrIntegers, k) {
    var arrSeen =[],
        arrReturn = [],
        i = 0,
        arrIntegersLength = arrIntegers.length;

    for (i = 0; i < arrIntegersLength; i++) {
        var intTarget = k - arrIntegers[i];
        if (arrSeen.indexOf(intTarget) === -1) {
            arrSeen.push(arrIntegers[i]);
        } else {
            arrReturn.push(Math.min(arrIntegers[i], intTarget) + " + " + Math.max(arrIntegers[i], intTarget));
        }
    }
    return arrReturn;
}

//
// arrExample = [1,3,2,2];
//
// k = 4;
//
// function arrayPairSum(example, k) {
//
//   if (arrExample.length<2) {
//     return
//   }
//
//   seen = set();
//   output = set();
//
//   for ( var i = 1; i < arrExample.length; i++) {
//     if (arrExample[i-1]+arrExample[i] == k) {
//       print (arrExample[i-1], arrExample[i]);
//     }
//     else {
//
//     }
//   }
// }
//
//
//
//
