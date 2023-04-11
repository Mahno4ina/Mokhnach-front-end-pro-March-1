function solution(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const charCount = new Array(26).fill(false);

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      charCount[index] = true;
    }
  }

  return charCount.every((c) => c);
}

//________________________________________________________________________________________________________________________________________________

function solution(sentence) {
  const words = sentence.split(" ");

  const averageLength =
    words.reduce((acc, cur) => acc + cur.length, 0) / words.length;

  const result = words.filter((word) => word.length > averageLength);

  return result;
}

console.log(solution("This is a sample string"));
console.log(solution("Some another sample"));
console.log(solution("Do, do, do, do... it!"));

//________________________________________________________________________________________________________________________________________________

function Database() {
  this.users = [];
  this.adminEmail = "admin@example.com";
  this.password = "password123";
}

Database.prototype.addUser = function (user) {
  this.users.push(user);
};

function User(name, email) {
  this.name = name;
  this.email = email;
}

function VerifiedUser(name, email) {
  User.call(this, name, email);
  this.verified = true;
}

VerifiedUser.prototype = Object.create(User.prototype);

function Guest(name, email) {
  User.call(this, name, email);
}

Guest.prototype = Object.create(User.prototype);

const db = new Database();

const admin = new VerifiedUser("Admin", db.adminEmail);
const user1 = new VerifiedUser("John", "john@example.com");
const user2 = new Guest("Kate", "kate@example.com");

if (admin.password === db.password) {
  db.addUser(admin);
}

db.addUser(user1);
db.addUser(user2);

console.log(db.users);
