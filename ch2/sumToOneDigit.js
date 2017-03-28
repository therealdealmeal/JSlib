function sumToOneDigit(num) {
    var arr = [];
    num = num.toString();
    var newNum = 0;

    while(num.length>1) {
        for(i=0; i<num.length; i++) {
            arr.push(Number(num[i]));
            newNum += arr[i];
        }
        arr = [];
        num = newNum.toString();
        newNum = 0;
    }
    console.log(num);
}



sumToOneDigit(928);
