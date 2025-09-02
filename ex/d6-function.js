let scores = [80, 75, 90, 60, 100];

function sumArray(arr) {
    let total = 0;
    for(let i = 0;i<arr.length;i++){
        total = total + arr[i];
    }// 用 for loop 或 forEach 加埋 arr 入面所有數字
    return total; // 記得最後 return 總和
}

console.log(sumArray(scores)); // 預期輸出 405

function sumArrayEach(arr){
    let total = 0;
    arr.forEach(score => {
        total = total + score;
    });
    return total;
}
console.log(sumArrayEach(scores));

//加法
function add(a,b){
    return a + b;
}
console.log(add(5,10));

//平方
function square(a){
    return a * a;
}
console.log(square(10));

//判斷及格
function isPass(x){
    if (x >= 60){
        return "合格";
    }
    else{
        return "不合格";
    }
}
console.log(isPass(60));
console.log(isPass(40));

//陣列總和 
function sumArray1(arr){
    let total = 0;
    let scores = [];
    for (i = 0 ; i <scores.length ; i++){
        total = total + scores[i];
    }

}
//陣列總和
function sumArray1(arr){
    let total = 0;
    for(let i = 0; i < arr.length;i++){
        total = total + arr[i];
    }
    return total;
}
console.log(sumArray1([1, 2, 3, 4])); // 10

//找最大值
function findMax(arr){
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([5, 9, 2, 11, 7])); // 11

//找最小值
function findMin(arr){
    let min = arr[0]
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([5, 9, 2, 11, 7])); // 2

//計平均數
function average(arr){
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum = sum + arr[i];
    }
    let average = sum /arr.length;
    return average;
}


console.log(average([80, 75, 90, 60, 100])); // 81

//計及格人數
//寫一個 function countPass(arr)，計算陣列分數中大於等於 60 嘅人數。
function countPass(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length ;i++){
        let score = arr[i];
        if(score >= 60){
            count++;
        }
    }
    return count;
}

console.log(countPass([80, 75, 90, 60, 100, 50])); // 5

//合格名單
//寫一個 function getPassList(arr)，輸出所有分數大於等於 60 嘅人名。
//（假設你有一個陣列存學生資料）

let students = [
  {name: "Max", score: 80},
  {name: "Tom", score: 50},
  {name: "Alice", score: 90}
];

function getPassList(students){
    let passList = [];
    for(let i = 0 ; i <students.length ; i ++){
        let student = students[i];
        if(student.score >= 60){
            passList.push(student.name);
        }
    }
    return passList;
}

console.log(getPassList(students));
// ["Max", "Alice"]

