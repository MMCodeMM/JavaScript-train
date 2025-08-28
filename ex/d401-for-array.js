//找最小值
let prices = [99, 45, 120, 60, 20];
// 請用 for loop 搵出最細嘅數字
let min = prices[0] ;
let max = prices[0];
for(let i = 0 ; i < prices.length;i++){
    if(prices[i]< min){
        min = prices[i];

    }
    if(prices[i]>max){
        max = prices[i];
    }
}
console.log(min);
console.log(max);

//計平均分
let scores = [80, 75, 90, 60, 100];
// 請計算所有分數嘅平均值
let sum = 0;
for( let i = 0 ; i < scores.length ; i++){
    sum = sum + scores[i];
}
    let average = sum / scores.length;
console.log(average);


//過濾偶數
let numbers = [12, 7, 19, 24, 36, 41];
// 請用 for loop 印出所有偶數
for(let i = 0 ; i < numbers.length ; i ++){
    if(numbers[i] % 2 === 0 ){
        console.log(numbers[i]);
    }
}

//文字加工
let fruits = ["蘋果", "香蕉", "橙子"];
// 請用 forEach 印出：我今日食咗 XXX
fruits.forEach(function(fruits){
    console.log("我今日食咗" + fruits);
})

//計長度
let animals = ["狗", "貓", "兔子", "大象"];
// 請印出每隻動物名字有幾多個字
// 提示：用 animals[i].length
animals.forEach(function(animals){
    console.log(animals.length);
})

for(let i = 0; i < animals.length ; i++){
    console.log(animals[i].length);
}