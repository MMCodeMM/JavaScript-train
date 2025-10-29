let students = [
  { name: 'Alice', score: 78 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 92 },
  { name: 'David', score: 66 },
  { name: 'Eva', score: 45 }
];

students.forEach(student => {
    console.log(`${student.name} - ${student.score}`);
});

let passedStudents = students.filter(student =>{
    return student.score >= 60;
});
let passNames = passedStudents.map(student => student.name )
console.log("及格學生 : " + passNames.join(","));

let notPassedStudents = students.filter(student =>{
    return student.score < 60;
});

let notPassNames = notPassedStudents.map(student => student.name);
console.log("不及合格學生 : " + notPassNames.join(",") );

let totalScore = students.reduce((sum,student)=>{
    return sum + student.score;
},0)

averageScore = totalScore / students.length;
console.log("平均分：" + averageScore);

