const shoppingCart = [
    {
        id: 1,
        name: "HP Laptop",
        price: 250000,
        quantity: 1,
        image: "https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
        id: 2,
        name: "HP Notebook",
        price: 180000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Lih9AsP6zSuIrKVJx5yL7rwEVkgjIWd2o7cVOo70-Q&s"
    },
    {
        id: 3,
        name: "Dell Laptop",
        price: 200000,
        quantity: 1,
        image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg"
    },
    {
        id: 4,
        name: "Lenovo Laptop",
        price: 280000,
        quantity: 1,
        image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
    },
    {
        id: 5,
        name: "Asus Laptop",
        price: 190000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStsflt0vOhuh9CmQRcJEVLry4JoT3x6Ft41KXOuau&s"
    },
]

// select shopping cart container
const shoppingContainer = document.getElementById
("checkoutCon");
// const totalPrice = document.getElementById('totalPrice')

function deleteProduct(event) {
    let id = event.target.id
    id = parseInt(id)

    const product = shoppingCart.find((product) => product.id === id);
    const index = shoppingCart.indexOf(product);
    shoppingCart.splice(index, 1);
    shoppingContainer.innerHTML = "";
    displayShoppingCart()
}
function handleIncrement(event){
    let id = event.target.id
    id = parseInt(id)
    const product = shoppingCart.find((product) => product.id === id);
    let quantityTag = document.getElementById(product.name)
    product.quantity = product.quantity + 1
    quantityTag.innerHTML = product.quantity
    totality()

}

function handleDecrement(event) {
    let id = event.target.id
    id = parseInt(id)
    const product = shoppingCart.find((product) => product.id === id)
    let quantityTag = document.getElementById(product.name)
    product.quantity = (product.quantity > 1)? product.quantity - 1: product.quantity;
    quantityTag.innerHTML = product.quantity
    totality()

}

function totality() {
    // let id = event.target.id
    // id = parseInt(id)
    // const product = shoppingCart.find((product) => product.id === id)
    let totalTag = document.getElementById('totalPrice');
    let totalPrice = 0
    shoppingCart.forEach((product) => {
        const price = product.price
        const quantity = product.quantity
        const productPrice = price * quantity
        totalPrice += productPrice
    })
    totalTag.innerHTML = `N${totalPrice}`
}



function displayShoppingCart() {
// loop through shopping cart items
for (product of shoppingCart) {
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class", "card");

// create product image
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.name);

    // add product image to product container
    productContainer.appendChild(productImage);

    // add productContainer to shopping container
    shoppingContainer.appendChild(productContainer);

    // create product info container
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "productInfo");
    const topCon = document.createElement("div");
    topCon.setAttribute("class", "topCon");

    // create product name and delete btn
    const productName = document.createElement("h3");
    productName.innerHTML = product.name;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", product.id)
    deleteBtn.innerHTML = "Delete";

    //add an event ti the delete btn to topCon
    deleteBtn.addEventListener("click", (event) =>
    deleteProduct(event));

    // add product name and  delete btn to topCon
    topCon.appendChild(productName);
    topCon.appendChild(deleteBtn);

    // add topCon to product info container
    productInfo.appendChild(topCon);

     // add product info container to product container
        productContainer.appendChild(productInfo);

    // productContainer to shopping container
        shoppingContainer.appendChild(productContainer);

    // create product price
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "price")
    productPrice.innerHTML = `Price: ${product.price}`;

    // add product price to product info container
    productInfo.appendChild(productPrice);

    // create btn container
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btnCon");

    //create the increment and decrement button
    const increment = document.createElement("button");
    increment.innerHTML ="+";
    increment.setAttribute('id', product.id)
    increment.addEventListener('click', (event) => handleIncrement(event))

    const decrement = document.createElement("button");
    decrement.innerHTML ="-";
    decrement.setAttribute('id', product.id )
    decrement.addEventListener('click', (event) => handleDecrement(event))

    // create quality display
    const quantity = document.createElement("p");
    quantity.innerHTML = product.quantity;
    quantity.setAttribute('id', product.name)
    
    // increment.addEventListener("click", function(e){
    //         product.quantity += 1
    //     quantity.innerHTML = product.quantity
    //     })
    
    // decrement.addEventListener("click", function(e){
    //         product.quantity -=1
    //     quantity.innerHTML = product.quantity
    // } ) 


    // add increment, decrement and quantity to btn container
    btnContainer.appendChild(increment);
    btnContainer.appendChild(quantity);
    btnContainer.appendChild(decrement);

    // add btn container to product info container
    productInfo.appendChild(btnContainer);

     // add productContainer to shopping container
    shoppingContainer.appendChild(productContainer);

    totality()

    
    }

}

displayShoppingCart()





    // const totalContainer = document.createElement("div")
    // totalContainer.setAttribute("class", "total")

    // const totals = document.createElement("h3")
    // totals.innerHTML = "TOTAL"

    // const totalPrice = document.createElement("h3")
    // totalPrice.innerHTML = "0"
    // totalPrice.setAttribute("id", "totalPrice")

    // totalContainer.appendChild(totals);
    // totalContainer.appendChild(totalPrice);

    // //productContainer.appendChild(totalContainer)

    // shoppingContainer.appendChild(totalContainer)




