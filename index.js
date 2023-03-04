 var name = prompt("Enter your name:");

 var surname = prompt("Enter your surname");

 var ageNumber = prompt("Enter your age:");

 var city = prompt("Enter your city:");

 var age = Number(ageNumber);


 var user = {
   name,
   surname,
   age,
   city,
 };


 var canShowData = confirm("Do you allow your data to be shown?");

 canShowData

   ? console.log

   (`Username ${user.name}, Surname ${user.surname}, Age ${user.age}, City ${user.city}`)

   : alert("The user has blocked the display of data");
