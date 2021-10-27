/* Write a program that uses "console.log" to print all the numbers 
from 1 to 100, with two exceptions. For number divisible by 3, print
"Fizz" instead of the number, and for numbers divisible by 5 (and not 
3), print "Buzz" instead. 

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisble by both 3 and 5 (and still print "Fizz or
"Buzz" for numbers divisible by one of those)
*/ 

//Loop to build 1 to 100 
//'number' needs to be equal to 1 to prevent 0/3 = 0 would log "Fizz"
for (let number = 1; number <= 100; number ++) {
    if (number%3 == 0) {
        console.log(`${number}Fizz`);
  } else if (number%5 == 0) {
      console.log(`${number}Buzz`)
  } 
    if (number%3 == 0 && number%5 ==0 ) {
      console.log(`${number}FizzBuzz`)
  }

}  

/* Output:
3Fizz
5Buzz
6Fizz
9Fizz
10Buzz
12Fizz
15Fizz
15FizzBuzz
18Fizz
20Buzz
21Fizz
24Fizz
25Buzz
27Fizz
30Fizz
30FizzBuzz
33Fizz
35Buzz
36Fizz
39Fizz
40Buzz
42Fizz
45Fizz
45FizzBuzz
48Fizz
50Buzz
51Fizz
54Fizz
55Buzz
57Fizz
60Fizz
60FizzBuzz
63Fizz
65Buzz
66Fizz
69Fizz
70Buzz
72Fizz
75Fizz
75FizzBuzz
78Fizz
80Buzz
81Fizz
84Fizz
85Buzz
87Fizz
90Fizz
93Fizz
95Buzz
96Fizz
99Fizz
100Buzz


*/
