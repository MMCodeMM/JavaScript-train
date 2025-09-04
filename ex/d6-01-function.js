//題目 1：找最大值位置

//寫一個 function findMaxIndex(arr)，回傳陣列最大值嘅位置（index）。

function findMaxIndex(arr){
    let max = arr[0];
    let maxIndex = 0;
    for(let i = 0 ; i < arr.length; i ++){
        if(arr[i]>max){
            max =  arr[i];
            maxIndex = i;
        }

    }
    return maxIndex;
}

function findMinIndex(arr){
    let min = arr[0];
    let minIndex = 0;
    for(let i = 0;i < arr.length ; i++){
        if(arr[i]<min){
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(findMaxIndex([5, 9, 2, 11, 7])); // 3  (因為 11 喺 index=3)
console.log(findMinIndex([5, 9, 2, 11, 7])); 
