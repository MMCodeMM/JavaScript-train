let sum = 0 

for (let i =1 ; i <= 100 ; i++ ){
    sum = i + sum;

}

console.log(sum)

// 用 for loop 由 1 數到 10，只印出 偶數


for(let e = 1 ; e <= 10 ; e++){
    if(e % 2 === 0){
        console.log('偶數'+ e);
    }
}

//用 for loop 由 10 倒數到 1。
for(let i = 10 ; i >= 1 ; i--){
    console.log( i);
}

// 計算 1 到 50 嘅所有奇數總和。
let odd = 0;
for(let i = 1; i <= 50 ; i++){
    if(i % 2 !== 0){
        odd = i + odd;
    }
    
}

console.log(odd)

/*/用 for loop 印出：星星三角形
for(let i = 0 ; i >= 5 ; i++){
    console.log("*".repeat(i));
}
*/

//九九乘法表（部分）用 for loop 印出 1–9 嘅乘法表：

for(let i = 0 ; i >= 9 ; i++){
    
}