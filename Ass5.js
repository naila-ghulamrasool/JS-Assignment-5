//Q1
let num1 = 5; 
let num2 = 3;
let sum = num1 + num2;

//Q2
document.writeln(" Sum of 5 and 3 is:"+ sum + "<br>");
document.writeln(" Subtraction:" + (num1 - num2)+ "<br>");
document.writeln("Multiplication:" + (num1 * num2)+ "<br>");
document.writeln("Division:" + (num1 / num2)+ "<br>");
document.writeln("Modulus: " + (num1 % num2)+ "<br><br>");

//Q3
let a;
document.writeln("3a. Value after declaration is: " + a + "<br>");
a = 5;
document.writeln("3b. Initial value: " + a + "<br>");
a++;
document.writeln("3c. After increment: " + a + "<br>");
a += 7;
document.writeln("3d. After adding 7: " + a + "<br>");
a--;
document.writeln("3e. After decrement: " + a + "<br>");
let remainder = a % 3;
document.writeln("3f. The remainder is: " + remainder + "<br><br>");

//Q4
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write(" Total cost to buy 5 tickets: " + totalCost + " PKR" +"<br>");

//Q5
let tableNumber = 4;
document.writeln("Table of " + tableNumber +"<br>");
for (let i = 1; i <= 10; i++) {
  document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

//Q6
let item1Price = 650;
let item2Price = 100;
let qty1 = 3;
let qty2 = 7;
let shipping = 100;
let total = (item1Price * qty1) + (item2Price * qty2) + shipping;

document.writeln("<h3>Shopping Cart</h3>");
document.writeln("Price of item 1: " + item1Price + "<br>");
document.writeln("Quantity of item 1: " + qty1 + "<br>");
document.writeln("Price of item 2: " + item2Price + "<br>");
document.writeln("Quantity of item 2: " + qty2 + "<br>");
document.writeln("Shipping Charges: " + shipping + "<br>");
document.writeln("Total cost: " + total + " PKR<br>");

//Q7
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.writeln("<h3> Marks Sheet</h3>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + marksObtained + "<br>");
document.writeln("Percentage: " + percentage + "%<br>");

//Q8
let dollars = 10;
let riyals = 25;
let totalPKR = (dollars * 104.80) + (riyals * 28);
document.writeln("Total Currency in PKR: " + totalPKR +"<br><br>");

//Q9
let calc = ((5 + 5) * 10) / 2;
document.writeln("Result of ((5+5)*10)/2 is: " + calc+"<br><br>");

//Q10
let currentYear = 2016;
let birthYear = 1992;
let age = currentYear - birthYear;
document.writeln("Current year: " + currentYear + "<br>");
document.writeln("Birth year: " + birthYear + "<br>");
document.writeln("Your age is: " + age+"<br><br>");

//Q11
let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;
document.writeln("Radius of a circle: " + radius +"<br>") ;
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area + "<br><br>");

//Q12
let snack = "Chocolate Chip";
let currentAge = 15;
let maxAge = 65;
let perDay = 3;
let totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);

