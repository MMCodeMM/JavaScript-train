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
