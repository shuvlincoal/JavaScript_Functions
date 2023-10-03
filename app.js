console.log("Hello World!\n==========\n");
document.write("<br>Hello World!<br>==========<br>");


// Exercise 1 Section
console.log("\nEXERCISE 1:\n==========\n");
document.write("<br>EXERCISE 1:==========<br>");

function printOdds(count) 
  {
        if (count < 0) {
        console.log   ("\nHave you been drinking? Count is a negative number! count= " + count + "\n");
        document.write("<br>Have you been drinking? Count is a negative number! count= " + count + "<br>");
     }//if
     else {
       for (let i = 0; i < count; i++)
      {
          if (i % 3 === 0 ) {
          console.log   (i + ", ");
          document.write(i + ", ");
          }//if
      }//for
    }//else 
}//function

printOdds(-100);
printOdds(100);
    


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
document.write("<br>EXERCISE 2:==========<br>");
function checkAge(userName, age)
{
let aboveSixteen = ("Congrats " + userName + ", you can drive!\n")    
let belowSixteen = ("Sorry " + userName + ", but you're under age 16<br>")
if ( age < 16)
  {
    console.log   (belowSixteen + "\n");
    document.write(belowSixteen  + "<br>");
  }else {
    console.log   (aboveSixteen + "\n");
    document.write(aboveSixteen  + "<br>");
  }//else
}//function
checkAge("bart", 10);



// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
document.write("<br>EXERCISE 3:==========<br>");
function quadRant(x, y)
{
 if (x == 0 && y == 0) {
    console.log("(" + x + "," + y + ") x&y are at the origin\n");
    document.write("(" + x + "," + y + ") x&y are at the origin<br>");
}

 if (x == 0 && y > 0) {
    console.log("(" + x + "," + y + ") on the x axis\n");
    document.write("(" + x + "," + y + ") on the x axis<br>");
}

 if (x > 0 && y == 0) {
    console.log("(" + x + "," + y + ") on the y axis\n");
    document.write("(" + x + "," + y + ") on the y axis<br>");
}

 else if (x > 0 && y > 0) {
    console.log("(" + x + "," + y + ") is in the 1st quadrant\n");
    document.write("(" + x + "," + y + ") is in the 1st quadrant<br>");
}

 else if (x > 0 && y < 0) {
    console.log("(" + x + "," + y + ") is in the 2nd quadrant\n");
    document.write("(" + x + "," + y + ") is in the 2nd quadrant<br>");
}

 else if (x < 0 && y < 0) {
    console.log("(" + x + "," + y + ") is in the 3rd quadrant\n");
    document.write("(" + x + "," + y + ") is in the 3rd quadrant<br>");
}

 else if (x < 0 && y > 0) {
    console.log("(" + x + "," + y + ") is in the 4th quadrant\n");
    document.write("(" + x + "," + y + ") is in the 4th quadrant<br>");
}

}//function

quadRant(4, 3)
quadRant(-1, 2)
quadRant(0, 0)
quadRant(1, -2)
quadRant(0, 2)
quadRant(2, 0)
quadRant(-1, 0)
quadRant(-1, -2)

// Exercise 4 Section
console.log("EXERCISE 4:\n\n\n==========\n");
document.write("<br><br><br>EXERCISE 4:==========<br>");



function triangleType(a, b, c)
{

if ( (a + b) <= c || (b + c) <= a ||  (a + c) <= b ) //Invalid
  {
    console.log("Sides a, b, c, not valid triangle\n");
    document.write("Sides a, b, c, not  triangle<br>");
  }

if  (a == 0 &&  b == 0 &&  c == 0 )  //Invalid
  {
    console.log("Sides a, b, c, not valid triangle\n");
    document.write("Sides a, b, c, not  triangle<br>");
  }

if (a == b && b == c && a == c)  //equilateal
  {
    console.log("Sides a, b, c, make equilateral triangle\n");
    document.write("Sides a, b, c, make equilateral triangle<br>");
  }

if (a*b == b*c && b*c == c*a || c*a == a*b)  //isosceles
  {
    console.log("Sides a, b, c, make isosceles triangle\n");
    document.write("Sides a, b, c, make isosceles triangle<br>");
  }

if ( a!=b && b!=c)  //scalene
  {
    console.log("Sides a, b, c, make scalene triangle\n");
    document.write("Sides a, b, c, make scalene triangle<br>");
  }

}//triangleType

triangleType(1, 2, 3);
triangleType(1, 0, 3);
triangleType(41, 20, 3);
triangleType(10, 10, 3);
triangleType(14, 14, 14);





// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
document.write("<br>EXERCISE 5:==========<br>");


function phonePlan(planLimit, day, usage)
{
    let dailyAvg = Math.ceil(planLimit/30);
    console.log   ("Daily avg for plan is: " + dailyAvg + "GB/day \n");
    document.write("Daily avg for plan is: " + dailyAvg + "GB/day <br>");

    let currentAvg = Math.ceil(usage/day);
    let dataLeft   = Math.ceil(planLimit - usage);
    let remainAvg  = Math.ceil(dataLeft/(30-day));

    if ( currentAvg => dailyAvg)
     {
    console.log   ("Your avg is: "   + currentAvg + "GB/day  which exceeds your plan rate of: " + dailyAvg + "GB/day\n" );
    document.write("Your avg is: "   + currentAvg + "GB/day, which exceeds your plan rate of: " + dailyAvg + "GB/day<br>"); 
    console.log   ("You only have: " + dataLeft   + "GB left, at: " + remainAvg  +  "GB per day\n")
    document.write("You only have: " + dataLeft   + "GB left, at: " + remainAvg  +  "GB per day<br>");
     }

    if ( currentAvg < dailyAvg)
     {
    console.log   ("Your avg is: " + currentAvg + "GB/day under your plan rate: " + dailyAvg + "GB/day\n");
    document.write("Your avg is: " + currentAvg + "GB/day under your plan rate: " + dailyAvg + "GB/day<br>");
    console.log   ("You have: "    + dataLeft   + "GB left, at: " + remainAvg     + "GB per day\n")
    document.write("You have: "    + dataLeft   + "GB left, at: " + remainAvg     + "GB per day<br>");
     }

}//phonePlan

phonePlan(20, 12, 5)