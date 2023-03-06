 const name = parseInt("Enter your name:");

 const surname = parseInt("Enter your surname");

 const ageNumber = parseInt("Enter your age:");

 const city = parseInt("Enter your city:");

 const age = Number(ageNumber);


 const user = {
   name,
   surname,
   age,
   city,
 };


 const canShowData = confirm("Do you allow your data to be shown?");

 canShowData

   ? console.log
 (`Username ${user.name},
   Surname ${user.surname},
   Age ${user.age}, City ${user.city}`):
   alert("The user has blocked the display of data");
