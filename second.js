function Student(firstName, lastName, birthYear, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    const attendanceIndex = this.attendance.indexOf(null);
    if (attendanceIndex !== -1) {
      this.attendance[attendanceIndex] = true;
    }
  };

  this.absent = function () {
    const attendanceIndex = this.attendance.indexOf(null);
    if (attendanceIndex !== -1) {
      this.attendance[attendanceIndex] = false;
    }
  };

  this.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attendanceCount = this.attendance.filter(Boolean).length;
    const attendancePercentage = attendanceCount / this.attendance.length;

    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}


const student1 = new Student("Іван", "Іванов", 1998, [80, 90, 95]);
const student2 = new Student("Марія", "Петренко", 2000, [95, 95, 95, 95]);


student1.present();
student1.present();
student1.absent();
console.log(student1.attendance); 
console.log(student1.getAge()); 
console.log(student1.getAverageGrade()); 
console.log(student1.summary()); 

student2.present();
student2.present();
student2.present();
console.log(student2.attendance); 
console.log(student2.getAge()); 
console.log(student2.getAverageGrade());
console.log(student2.summary()); 
const studentForm = document.getElementById("student-form");
const studentList = document.getElementById("student-list");














































/*
studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const birthYear = document.getElementById("birth-year").value;
  const grades = document.getElementById("grades").value;

  const studentItem = document.createElement("li");
  studentItem.innerHTML = `${firstName} ${lastName} (${birthYear}): ${grades}`;
  studentList.appendChild(studentItem);

  studentForm.reset();
});
*/