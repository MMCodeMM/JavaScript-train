//鞏固 Object + Array + Function 嘅基本操作
//題目 1：找最小值（Array）

//寫一個 function findMin(arr)，回傳陣列中最細嘅數字。

function findMin(arr){
    let min = arr[0];
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([9, 3, 7, 2, 8])); // 2

//題目 2：平均分（Array）
//寫一個 function average(arr)，計算分數平均值。
function average(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum / arr.length;
    return average;
}

console.log(average([80, 75, 90, 60, 100])); // 81

//題目 3：過濾偶數（Array）
//寫一個 function filterEven(arr)，回傳陣列中所有偶數組成嘅新陣列。
function filterEven(arr){
    let even = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] %2 === 0){
            even.push(arr[i]);
        }

    }
    return even;
}

console.log(filterEven([1,2,3,4,5,6,7,8])); // [2,4,6,8]

