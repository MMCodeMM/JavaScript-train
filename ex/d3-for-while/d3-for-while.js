let sum = 0 

for (let i =1 ; i <= 100 ; i++ ){
    sum = i + sum;

}

//console.log(sum)

// 用 for loop 由 1 數到 10，只印出 偶數


for(let e = 1 ; e <= 10 ; e++){
    if(e % 2 === 0){
        console.log('偶數'+ e);
    }
}

//用 for loop 由 10 倒數到 1。
for(let i = 10 ; i >= 1 ; i--){
    row = "";
    row += i + "\t";
    console.log( row);

}

// 計算 1 到 50 嘅所有奇數總和。
    let odd = 0;

for(let i = 1; i <= 50 ; i++){
    if(i % 2 !== 0){
       odd = i + odd;
    }
}
//    console.log(odd);



//用 for loop 印出：星星三角形
for(let i = 0 ; i <= 5 ; i++){
    console.log("*".repeat(i));
}
//用 for loop 印出：星星倒三角形
for(let i = 5 ; i >= 0 ; i--){
    console.log("*"  .repeat(i));
}
//挑戰版：星星金字塔
let total = 5;
for(let i = 1 ; i <= total ; i++){
    let space = " ".repeat(total - i );
    let starts= "*".repeat(2*i-1);
    console.log(space+starts);
    
}
//九九乘法表（部分）用 for loop 印出 1–9 嘅乘法表：

/*for(let i =1 ; i<=9;i++){
    for(let x = 1 ; x <=9 ; x ++){
        console.log(i + "x" + x + "="+ (i *x));
    }
}*/

//九九乘法表排版得整齊，好似「表格」咁易睇
for(let i = 1 ; i <= 9 ; i++){
    let row = "";
    for(x = 1 ; x <= 9 ; x++){
        row += i + "x" + x + "=" + (i * x) + "\t";
    }
    console.log(row);
}