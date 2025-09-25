/*let car = {
    brand:"Toyota",
    color: "red",
    year: 2020
};
car.color = "black";
car.owner = "Max";
car.type = "SUV";
console.log(car.color);
console.log(car.owner); 
console.log(car.type);

for(let key in car){
    console.log(key + "="+car[key]);
}*/

//建立一個 products 陣列，入面有 3 個 Object，每個 Object 包含：

//name（商品名）

//price（價格）

//用 .forEach() 印出：
let products = [
    {name:"A", price: 20},
    {name:"B",price:30}
];
products.push({name:"C",price:50});
let total = 0;
products.forEach(product => {
    total = total + product.price;
    console.log("商品名 : " + product.name + "," + "價格 : " + product.price );

});
    console.log("Total Prices :" + total);
