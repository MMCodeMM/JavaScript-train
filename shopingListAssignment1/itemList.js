let items = [
    {name : 'Ear-Phone',price: 120},
    {name : 'mouse',price: 70},
    {name : 'usb-line',price: 88},
    {name : 'speaker',price: 30},
    {name : 'charge-line',price: 99},
    {name : 'mobile-phone',price: 150},
    {name : 'paper',price: 20},
    {name : 'marker',price: 12},
    {name : 'pen',price: 77},

]

items.forEach(item =>{
    console.log(`${item.name} : $${item.price}`);
});

let total = items.reduce((sum, item) => sum + item.price, 0);
console.log('總價:', total);

let averagePrice = total / items.length;

console.log('Average Price' +''+'is :' + averagePrice);

function statisticLowPrice(arr){
    let count = 0 ;
    let lowPriceItem = [];
    for(let i = 0 ; i <arr.length;i++){
        let item = arr[i];
        if (item.price<50){
            count++;
            lowPriceItem.push(item.name);
        }
    }
    return {count,lowPriceItem};
    
}
let result = statisticLowPrice(items);
console.log(`有 ${result.count}+ 商品低於50 : + ${result.lowPriceItem.join(', ')}` );

function statisticHigherPrice(arr){
    let count = 0 ;
    let highPriceItem = [];
    for(let i = 0 ; i <arr.length;i++){
        let item = arr[i];
        if (item.price>50){
            count++;
            highPriceItem.push(item.name);
        }
    }
    return {count,highPriceItem};
    
}
let highPriceItemResult = statisticHigherPrice(items);
console.log(`有 ${highPriceItemResult.count}+ 商品高於50 : + ${highPriceItemResult.highPriceItem.join(', ')}` );

