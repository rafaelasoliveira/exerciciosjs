const products = require('./products');
const limiteValor = 400;

adicionarNovoProduto();
excluirProdutoForaDoEstoque();
somaEstoque();
produtosMaisCaros(limiteValor);
produtosComO();

function adicionarNovoProduto(){
    products.push({name: 'AppleWatch', price: 1500, quantity: 30, colors:['white', 'black']})
}

function excluirProdutoForaDoEstoque(){
    products.filter((product, index, products) =>{
        if(product.quantity == 0){
            products.splice(index, 1);
        }
    })
}

function somaEstoque(){
    let soma = 0;
    products.forEach(product =>{
        soma += product.quantity;
    })
    console.log(soma);
}

function produtosMaisCaros(limiteValor){
    products.forEach(product =>{
        if(product.price > limiteValor){
            console.log(product);
        }
    })
}

function produtosComO(){
    products.forEach(product =>{
        if(product.name.includes("o")){
            console.log(product.name);
        }
    })
}