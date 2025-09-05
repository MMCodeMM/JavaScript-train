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
console.log(findMinIndex([5, 9, 2, 11, 7])); //2

//題目 2：計算奇數總和

//寫一個 function sumOdd(arr)，計算所有奇數嘅總和。
function sumOdd(arr){
    let odd = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] %2 !== 0){
            odd = odd + arr[i];
        }
    }
    return odd;
}
console.log(sumOdd([1,2,3,4,5,6,7,8])); // 16  (1+3+5+7)

//題目 3：字串長度清單

//寫一個 function getLengthList(words)，回傳一個新陣列，入面係每個字串嘅長度。
function getLengthList(words){
    let lengthList = [];
    for(let i = 0 ; i < words.length; i ++){
        lengthList.push(words[i].length);
    }
    return lengthList;
}
console.log(getLengthList(["apple", "hi", "banana"])); 
// [5, 2, 6]

//及格與不及格分開

//寫一個 function splitScores(arr)，回傳一個物件，入面有 pass 同 fail 兩個陣列。
function splitScores(arr){
    let pass = [];
    let fail = [];
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] >= 60){
            pass.push(arr[i]);
        }
        if(arr[i]<60){
            fail.push(arr[i]);
        }
    }
    return 'pass' + pass;
    return 'fail' + fail;

}

console.log(splitScores([80, 55, 100, 40, 70]));
// { pass: [80, 100, 70], fail: [55, 40] }
