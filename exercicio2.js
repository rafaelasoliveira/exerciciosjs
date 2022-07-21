let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

adicionarId(products);
imprimirNome(products);
imprimirId3(products);
imprimirCorBlack(products);
imprimirCorNull(products);

function adicionarId(products){
    let index = 1;
    products.forEach(element => {
        element.id = index;
        console.log(element);
        index++;
    });
}

function imprimirNome(products){
    products.forEach(element => {
        console.log(element.name);
    });
}

function imprimirId3(products){
    console.log(products.find(element => element.id == 3));
}

function imprimirCorBlack(products){
    products.forEach(product =>{
        if(product.colors.find(color => color == 'black')){
            console.log(product);
        }
    })
}

function imprimirCorNull(products){
    products.forEach(product =>{
        if(product.colors.length == 0){
            console.log(product);
        }
    })
}