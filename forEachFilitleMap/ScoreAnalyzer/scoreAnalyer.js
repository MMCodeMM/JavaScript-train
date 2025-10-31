// 🎓 成績分析器（Score Analyzer）

// 1️⃣ 學生資料
let students = [
  { name: 'Alice', score: 78 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 92 },
  { name: 'David', score: 66 },
  { name: 'Eva', score: 45 }
];

// 2️⃣ 主程式流程
function analyzeScores(arr) {
  // （A）分類：合格、不合格
  let passedStudents = [];
  let notPassedStudents = [];

  // 👉 TODO: 用 forEach 或 filter 來分類
    students.forEach(student =>{
        if(student.score >= 60){
            passedStudents ++;
        }
        else{
            notPassedStudents ++;
        }
    });
  // （B）計算平均分
  let averageScore = 0;

  // 👉 TODO: 用 reduce 計算

  // （C）找出最高分、最低分
  let highestStudent = null;
  let lowestStudent = null;

  // 👉 TODO: 用 reduce 或 sort 找出

  // （D）輸出報告
  console.log("📊 成績報告");
  console.log("--------------------");
  console.log("平均分：");
  console.log("最高分：");
  console.log("最低分：");
  console.log("合格人數：");
  console.log("不合格人數：");
}

// 3️⃣ 執行主程式
analyzeScores(students);
