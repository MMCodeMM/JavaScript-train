## 學生成績分析系統 (Student Score Analyzer)

建立一個 JavaScript 檔（例如 studentAnalyzer.js），分析一班學生嘅成績資料，並輸出成績統計結果。

功能要求

1️⃣ 顯示所有學生成績

students.forEach(student => console.log(`${student.name} - ${student.score}`));

2️⃣ 找出及格學生（score ≥ 60）
→ 用 .filter() 完成。

3️⃣ 找出不及格學生（score < 60）
→ 用 .filter() 完成。

4️⃣ 計算全班平均分
→ 用 .reduce() 完成。

5️⃣ 找出最高分及最低分的學生
→ 用 for loop 或 reduce() 完成。

6️⃣ 把結果格式化顯示
例如：

全班平均分：72
最高分：Charlie (92)
最低分：Eva (45)
及格學生：Alice, Charlie, David
不及格學生：Bob, Eva