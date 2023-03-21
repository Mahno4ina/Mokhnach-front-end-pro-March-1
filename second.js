let phoneNumbers = []; 
let totalBalance = 0; 

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  let balance = parseFloat(user.balance.replace(/[$,]/g, '')); 
  if (balance > 2000) {
    phoneNumbers.push(user.phone);
  }
  totalBalance += balance;
}

console.log("Телефонні номери користувачів з балансом більше 2000 доларів:");
console.log(phoneNumbers);

console.log("Загальна сума балансів користувачів: " + totalBalance);