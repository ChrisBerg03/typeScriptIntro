interface Cart {
    id: number;
    quantity: number;
}

let cart: Cart[] = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
    { id: 3, quantity: 5 },
];

function addToCart(id: number) {
    let changed = false;
    cart.map((product) => {
        if (product.id === id) {
            product.quantity++;
            changed = true;
        }
        return product;
    });
    if (changed === false) {
        cart.push({ id: id, quantity: 1 });
    }
}

function removeFromCart(id: number) {
    cart.map((product) => {
        if (product.id === id) {
            product.quantity--;
        }
        return product;
    });
    cart = cart.filter((product) => product.quantity > 0);
}

addToCart(4);

removeFromCart(1);

console.log(cart);
