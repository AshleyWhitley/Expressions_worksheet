/**
 * Created by MissyGotGame on 3/12/15.
 */
/*
Ashley Whitley
Expressions Worksheet
March 12, 2015
 */

/*
 Problem 1:
Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
Calculate how old Sparky the pit bull is in dog years based on his actual age.
 Givens:
Sparky’s age.
 Result Variable:
Sparky’s age in dog years.
 Result to Print:
“Sparky is X human years old which is X in dog years.
 */

var humanAge = 8;
dogAge = (humanAge * 7),
console.log("Sparky is" +" "+ humanAge +" "+ "human years old which is" +" "+ dogAge +" "+ "in dog years." );
/*
 Problem 2:
 A bunch of students are having a party and somebody ordered pizza.
 Create an expression that calculates how much pizza each partygoer will get at the party.
 (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
 Given:
 Number of slices per pizza
 Number of people at the party
 Number of pizzas ordered.
 Result Variables:
Number of slices per person. (Can be a decimal or floating point).
 Result to Print:
“Each person ate X slices of pizza at the party.”
 */

var people = 25;
var pizzas = 10;
var spp = 8; //Slices per pizza
totalSlices = (pizzas * spp) / people;
console.log("Each person ate" +" "+ totalSlices +" "+ "slices of pizza at the party.");


/*
 Problem 3:
 At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests.
 Assume guests get whole slices, how many whole slices will Sparky feast on?
Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices.
 (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
 Given:
Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
 Result Variables:
 Number of slices Sparky gets to eat.
 Result to Print:
“Sparky got X slices of pizza.”
 */


//var is the given I set up above.
dogSlices = (.2 * pizzas);
console.log("Sparky got" +" "+ dogSlices +" "+ "slices of pizza.");


/*
 Problem 4:
 You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array.
 Create an expression that will use the items in the array to calculate the average amount spent on groceries.
Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.
Givens:
An array with five weekly grocery totals.
 Result Variable:
Total amount spent on groceries.
 Average weekly grocery spending.
 Result to Print:
“You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”
 */

var grocery1 = 125;
var grocery2 = 230;
var grocery3 = 170;
var grocery4 = 200;
var grocery5 = 250;

var total = (grocery1 + grocery2 + grocery3 + grocery4 + grocery5);
var average = (grocery1 + grocery2 + grocery3 + grocery4 + grocery5) / 5
console.log("You have spent a total of" +" "+ "$"+ total +" "+ "on groceries over 5 weeks. That is an average of" +" "+ "$" + average +" "+ "per week.");

/*
Problem 5:
 Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.
 (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
 Givens:
Original price
 Discount percentage (20% would be 20, for example)
 Description of item
 Sales tax percentage
 Result Variables:
Price of the item with tax
 Price of the item without tax
 Result to Print:
“Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
 */

var shirt;
var originalPrice = 300;
var withTax = 350;
var discounto = 60
var discountt = 70

var originalTotal = (300 - 60);
var taxTotal = (350 - 70);
console.log("Your shirt was originally" +" "+ "$"+ originalPrice +","+" "+ "but after a" + " " +discounto +"%"+" "+ "discount, it is now" +" "+"$"+originalTotal+" "+ "without tax, and"+" "+"$"+taxTotal+" "+ "with tax.");