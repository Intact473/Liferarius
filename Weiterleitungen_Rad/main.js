let carts = document.querySelectorAll('.add-cart');
//einzelnen produkte müssen hier aufgelistet werden
let products = [
    {
        name: 'Q-Bap',
        tag: 'Q-Bap',
        price:390,
        inCart: 0
    },
    {
        name: 'Dönerbox',
        tag: 'Dönebox',
        price:290,
        inCart: 0
    },
    {
        name: 'Dürüm-Döner',
        tag: 'Dürüm-Döner',
        price:430,
        inCart: 0
    },
    {
        name: 'Big Döner',
        tag: 'Big Döner',
        price:510,
        inCart: 0
    },
    {
        name: 'Vegetarischer Döner',
        tag: 'Vegetarischer Döner',
        price:450,
        inCart: 0
    },
    {
        name: 'Lahmacun',
        tag: 'Lahmacun',
        price:310,
        inCart: 0
    },

    {
        name: 'Lahmacun mit Fleisch',
        tag: 'Lahmacun mit Fleisch',
        price:430,
        inCart: 0
    },
    {
        name: 'Lahmacun mit Feta',
        tag: 'Lahmacun mit Feta',
        price:430,
        inCart: 0
    },
    {
        name: 'Lahmacun mit Salat',
        tag: 'Lahmacun mit Salat',
        price:430,
        inCart: 0
    },
    {
        name: 'Hamburger',
        tag: 'Hamburger',
        price:280,
        inCart: 0
    },
    {
        name: 'Cheeseburger',
        tag: 'Cheeseburger',
        price:320,
        inCart: 0
    },
    {
        name: 'Hähnchensandwitch',
        tag: 'Hähnchensandwitch',
        price:390,
        inCart: 0
    },
]
//folgender Teil ist für das adden der einzelnen Producte im Cart aka Einkaufswagen
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] ==undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');

    console.log("MY cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

//Hier machts in das Cart die Items 
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
//Hier werden die Produkte eingefügt
    console.log(cartItems);
    if ( cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <icon name="close"></icon>
                <img src="${item.tag}.jpg" width="50" height="75"> 
            <span>${item.name}</span>

            </div>
            <div class="price">${item.price/100}€</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">${(item.inCart * item.price)/100}€</div>
            </div>
            `
        });
//^Produkte werden hinzugefügt
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Gesammtpreis
                </h4>
                <h4 class="basketTotal">
                    ${cartCost/100}€
                </h4>
            </div>
            `
        ;
    }
}

onLoadCartNumbers();
displayCart();