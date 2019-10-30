
var result = " ";

/*--- defenetion the function -----*/
var num;
function Raindrops(number)
{
   if(number%3==0)
     {
       console.log("pling");
       result= result + "pling";
       num = number;
     }

    if(number%5==0)
     {
       console.log("plang");
       result= result + "plang";
       num = number;
     }

    if(number%7==0)
     {
       console.log("plong");
       result= result + "plong";
       num = number;
     }

     else if((number%3!=0 && number%5!=0) && (number%7!=0))
     {
       console.log(number);
       result= result + number;
       num = number;
     }
}

/*--- call the function -----*/
Raindrops(9);
document.write("<br>The number\n"+ num +"\ncontains 3 as a factor"+ result);
result=" ";
Raindrops(25);
document.write("<br>The number\n"+ num +"\ncontains 5 as a factor"+result);
result=" ";
Raindrops(28);
document.write("<br>The number\n"+ num +"\ncontains 7 as a factor"+result);
result=" ";
Raindrops(1755);
document.write("<br>The number\n"+ num + "\ncontain 3 and 5 as a factor."+result);
result=" ";
Raindrops(34);
document.write("<br>The number\n"+ num +"\ndoes not contain 3, 5, or 7 as a factor "+`${result}`);
result=" ";
