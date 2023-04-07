const shoppingcart=['milk','coffee','tea', 'honey'];

shoppingcart.unshift('meast');

shoppingcart.push('sugar');

if(shoppingcart.indexOf('honey')!=-1){
    shoppingcart.splice(shoppingcart.indexOf('honey'),1);
}
if(shoppingcart.indexOf('tea')!=-1){
    shoppingcart.splice(shoppingcart.indexOf('tea'),1,'green tea');
}

console.log(shoppingcart);