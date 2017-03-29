function primeNumber(num) {
 if(num < 2) {
   console.log("This is a prime number");
   return false;
 }

 var q = Math.floor(Math.sqrt(num));

 for(i=2; i<=q; i++) {
   if(num % i === 0) {
     console.log("This is a prime number");
     return false;
   }
 }
 console.log("This is a prime number");
 return true;
}

primeNumber(169);


STILL DOESNT WORK
