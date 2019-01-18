/*
    Function to convert a JavaScript object representation
    of a product to an HTML representation
*/
const createProductHTML = product => `
    <section class="product">
      <header class="product__header">
        <h2>${product.name}</h2>
      </header>

      <p class="product__description">
        ${product.description}
      </p>
     
      <footer class="product__footer">
        Price: ${product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})}

        <button id="${product.id}" class="product__purchaseButton">Purchase</button>
      </footer>

    </section>
`
// Iterate all products
for (product of products) {
    // Create HTML representation
    const theProductHTML = createProductHTML(product)

    // Reference to container
    const containerEl = document.querySelector("#productList")

    // Update HTML of container
    containerEl.innerHTML += theProductHTML
}

// Get a reference to all purchase buttons
const allButtons = document.querySelectorAll(".product__purchaseButton")

// Add a click event listener to each button
for (button of allButtons) {
    button.addEventListener(
        "click",
        (event) => {
            // Find the product whose `id` property is equal to
            // the "id" attribute of the button that was clicked on
            const foundProduct = products.find((product) => {
                return parseInt(event.target.id) === product.id
            })

            // Only if something was found, and if the product is not 
            //already in the shopping cart, add the product to the
            // shopping cart array
                     
                                   
            if (foundProduct !== null && shoppingCart.includes(foundProduct) === false) {
                shoppingCart.push(foundProduct)
                foundProduct["quantity"] = 1
                displayShoppingCart()

                //If the product is already in the shopping cart, increment the quantity. 

            } else if (foundProduct !== null) {
                foundProduct["quantity"]++
                displayShoppingCart()
            }
            


        });




    




}

  //if (shoppingCart[0].hasOwnProperty("quantity") === false) {

           // shoppingCart.filter(function (cartItem) {
             //   return cartItem.id === parseInt(event.target.id)
               // })






