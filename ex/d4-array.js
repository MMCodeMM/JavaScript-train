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