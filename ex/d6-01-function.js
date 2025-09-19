//題目 1：找最大值位置

//寫一個 function findMaxIndex(arr)，回傳陣列最大值嘅位置（index）。

function findMaxIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function findMinIndex(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
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
function sumOdd(arr) {
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd = odd + arr[i];
    }
  }
  return odd;
}
console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 8])); // 16  (1+3+5+7)

//題目 3：字串長度清單

//寫一個 function getLengthList(words)，回傳一個新陣列，入面係每個字串嘅長度。
function getLengthList(words) {
  let lengthList = [];
  for (let i = 0; i < words.length; i++) {
    lengthList.push(words[i].length);
  }
  return lengthList;
}
console.log(getLengthList(["apple", "hi", "banana"]));
// [5, 2, 6]

//及格與不及格分開

//寫一個 function splitScores(arr)，回傳一個物件，入面有 pass 同 fail 兩個陣列。
function splitScores(arr) {
  let result = {
    pass: [],
    fail: [],
  };

  for (let i = 0; i < arr.length; i++) {
    let score = arr[i];
    if (score >= 60) {
      result.pass.push(score);
    } else {
      result.fail.push(score);
    }
  }

  return result; // <- 要放喺 loop 外面
}

// 測試
console.log(splitScores([80, 55, 100, 40, 70]));
// 預期輸出: { pass: [80, 100, 70], fail: [55, 40] }

//題目：分開奇數同偶數

//寫一個 function splitOddEven(arr)，將一個數字陣列分開成：
function splitOddEven(arr) {
  let result = {
    odd: [],
    even: [],
  };

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    } // 👉 如果 num 可以被 2 整除
    // result.even.push(num);

    // 👉 否則
    // result.odd.push(num);
  }

  return result;
}

// 測試
console.log(splitOddEven([1, 2, 3, 4, 5, 6]));
// 預期輸出: { odd: [1, 3, 5], even: [2, 4, 6] }

//題目 1：正數 vs 負數
//寫一個 function splitPositiveNegative(arr)，將陣列分成正數同負數：
function splitPositiveNegative(arr) {
  let result = {
    positive: [],
    negative: [],
    zero: [],
  };
  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0) {
      result.positive.push(num);
    } else if (num < 0) {
      result.negative.push(num);
    } else {
      result.zero.push(num);
    }
  }
  return result;
}
console.log(splitPositiveNegative([3, -1, 0, 7, -5]));
// 預期: { positive: [3,7], negative: [-1,-5], zero:[0] }

//題目 2：字串長度分類

//寫一個 function splitShortLong(words)，把字串分成「短字」(長度 ≤ 3) 同「長字」(長度 > 3)：
function splitShortLong(words) {
  let result = {
    long: [],
    short: [],
  };
  for (let i = 0; i < words.length; i++) {
    let string = words[i];
    if (string.length > 3) {
      result.long.push(string);
    } else {
      result.short.push(string);
    }
  }
  return result;
}
console.log(splitShortLong(["hi", "apple", "cat", "banana"]));
// 預期: { short: ["hi", "cat"], long: ["apple", "banana"] }

//題目 3：分數等級

//寫一個 function gradeStudents(scores)，將分數分類：
function gradeStudents(scores){
    let result = {
        A : [],
        B : [],
        C : [],
        F : [],
    };

    for (let i = 0; i < scores.length; i++) {
        let s = scores[i];

        if (s >= 90) {
            result.A.push(s);
        } 
        else if (s >= 80 && s < 90) {
            result.B.push(s);
        } 
        else if (s >= 70 && s < 80) {
            result.C.push(s);
        } 
        else {
            result.F.push(s);
        }
    }
    return result;
}

console.log(gradeStudents([95, 82, 76, 60]));
// 預期: { A: [95], B: [82], C: [76], F: [60] }

//≥ 90 → "A"

//80–89 → "B"

//70–79 → "C"

//< 70 → "F"
// 預期: { A: [95], B: [82], C: [76], F: [60] }
