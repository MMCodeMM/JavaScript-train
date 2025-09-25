//將數字平方
let nums = [1,2,3,4,5];
// 用 map 回傳一個新陣列，每個數字平方
let squares = nums.map(num => {
    return num * num ;// 在呢度寫 num * num
});
console.log(squares); // 預期: [1,4,9,16,25]


//篩選成人
let people = [
  {name:"Alice", age:17},
  {name:"Bob", age:22},
  {name:"Charlie", age:15},
  {name:"David", age:30}
];


// 用 filter 篩選出 age >= 18 的人
let adults = people.filter(person => person.age >= 18);
console.log(adults); 
// 預期: [{name:"Bob", age:22}, {name:"David", age:30}]

//計算總和
let scores = [60, 70, 80, 90, 100];

// 用 reduce 計算總和
let total = scores.reduce((acc, score) => acc + score ,0
    // 在呢度寫 acc + score
);
console.log(total); // 預期: 400
