function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

   console.log(b);
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);
