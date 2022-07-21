const products = require('./products');

adicionarId();
imprimirNome();
imprimirId3();
imprimirCorBlack();
imprimirCorNull();

function adicionarId(){
    let index = 1;
    products.forEach(element => {
        element.id = index;
        console.log(element);
        index++;
    });
}

function imprimirNome(){
    products.forEach(element => {
        console.log(element.name);
    });
}

function imprimirId3(){
    console.log(products.find(element => element.id == 3));
}

function imprimirCorBlack(){
    products.forEach(product =>{
        if(product.colors.find(color => color == 'black')){
            console.log(product);
        }
    })
}

function imprimirCorNull(){
    products.forEach(product =>{
        if(product.colors.length == 0){
            console.log(product);
        }
    })
}