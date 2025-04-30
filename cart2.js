document.addEventListener("DOMContentLoaded", function () {
    const buttonContainers = document.querySelectorAll(".button-container");

    // Load saved cart data from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Restore quantities and cart actions on page load
    buttonContainers.forEach((container) => {
        const itemName = container.querySelector(".p1").textContent.trim();

        const savedItem = savedCart.find((item) => item.name === itemName);
        const cartActions = container.querySelector(".cart-actions");

        if (savedItem) {
            // Restore quantity controls
            cartActions.innerHTML = `
                <div class="quantity-selector">
                    <button class="quantity-btn decrement">-</button>
                    <span class="quantity-value">${savedItem.quantity}</span>
                    <button class="quantity-btn increment">+</button>
                </div>
            `;
        }

        // Add event listeners for cart actions
        container.addEventListener("click", function (event) {
            const addToCartBtn = event.target.closest(".add-to-cart-btn");
            const decrementBtn = event.target.closest(".decrement");
            const incrementBtn = event.target.closest(".increment");
            const quantityValue = container.querySelector(".quantity-value");

            if (addToCartBtn) {
                // Replace "Add to Cart" button with quantity controls
                cartActions.innerHTML = `
                    <div class="quantity-selector">
                        <button class="quantity-btn decrement">-</button>
                        <span class="quantity-value">1</span>
                        <button class="quantity-btn increment">+</button>
                    </div>
                `;
                updateCart(itemName, 1);
            }

            if (decrementBtn && quantityValue) {
                let currentQuantity = parseInt(quantityValue.textContent, 10);

                if (currentQuantity > 1) {
                    quantityValue.textContent = currentQuantity - 1;
                    updateCart(itemName, currentQuantity - 1);
                } else {
                    // Replace quantity controls with "Add to Cart" button
                    cartActions.innerHTML = `
                        <button class="add-to-cart-btn">Add to Cart</button>
                    `;
                    removeFromCart(itemName);
                }
            }

            if (incrementBtn && quantityValue) {
                let currentQuantity = parseInt(quantityValue.textContent, 10);
                quantityValue.textContent = currentQuantity + 1;
                updateCart(itemName, currentQuantity + 1);
            }
        });
    });

    /**
     * Update cart in localStorage.
     */
    function updateCart(name, quantity) {
        const itemPrice = parseInt(
            [...buttonContainers]
                .find((container) => container.querySelector(".p1").textContent.trim() === name)
                .querySelector(".p4").textContent.replace('₹', ''),
            10
        );

        // Retrieve cart data from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex((item) => item.name === name);

        if (existingItemIndex > -1) {
            // Update existing item
            cart[existingItemIndex].quantity = quantity;
        } else {
            // Add new item
            cart.push({ name, price: itemPrice, quantity });
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    /**
     * Remove an item from the cart.
     */
    function removeFromCart(name) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter((item) => item.name !== name);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});
