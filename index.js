 let name = prompt("Enter your name:");

 let surname = prompt("Enter your surname");

 let ageNumber = prompt("Enter your age:");

 let city = prompt("Enter your city:");

 let age = Number(ageNumber);


 let user = {
   name,
   surname,
   age,
   city,
 };


 let canShowData = confirm("Do you allow your data to be shown?");

 canShowData

   ? console.log

   (`Username ${user.name}, Surname ${user.surname}, Age ${user.age}, City ${user.city}`)

   : alert("The user has blocked the display of data");
