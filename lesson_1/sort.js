let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 }, 
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) return 5;
  if (student1.grade > student2.grade) return -5;
  return 0;
}

function sortGrades(student1, student2) {
  return student2.grade - student1.grade;
}

console.log(studentGrades.sort(sortGrades));