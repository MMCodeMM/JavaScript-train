let nums = [10 , 20 , 30];
console.log(nums[1]);

//用陣列 + for loop，印出所有水果： 
let fruits = ["蘋果", "香蕉", "橙子", "西瓜"];

for(let i = 0 ; i <= fruits.length; i ++){
    console.log(fruits[i]);
}
//會出左underfined 
/*let fruits = ["蘋果", "香蕉", "橙子", "西瓜"];
for(let i = 0 ; i < fruits.length; i ++)void{
    console.log(fruits[i]);
}
刪去"="除去underfined    */

//用 .forEach() 列出所有水果，但前面要加「我最鍾意食：」？
fruits.forEach(function(fruits){

    console.log("我最鍾意食" + ":"+fruits);
})

// 用 .forEach() 印水果，但要顯示佢哋嘅「順序號碼」：

fruits.forEach(function(fruits , index){
    console.log("第" + (index + 1 ) + "個水果" + ":" + fruits);
})

//找最尾元素
let nums1 = [3,7,11,25,42];
//console.log(nums1[4]);
console.log(nums1[nums1.length-1]);//best way 直接取最後一個元素

//合計總和
let scores = [60, 70, 80, 90, 100];
let sum = 0;
// 用 for loop 或 forEach 計算總分，印出總和
for(let i = 0 ; i < scores.length ; i++){
    sum = sum + scores[i];
}
console.log(sum);

//找最大值！
let ages = [15, 22, 36, 41, 28];
// 請找出最大嘅數字
let max = 0;
for(let i = 0 ; i < ages.length;i++){
    if(ages[i]>max){
        max = ages[i];
    }
}
console.log(max);