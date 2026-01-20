const Cart = {
    items: (() => {
        try {
            const cartData = localStorage.getItem('aura_cart');
            return cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            return [];
        }
    })(),

    save() {
        try {
            localStorage.setItem('aura_cart', JSON.stringify(this.items));
            this.updateBadge();
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
            alert('Failed to save cart. Please try again.');
        }
    },

    addItem(productId, quantity = 1, variation = {}) {
        try {
            const product = products.find(p => p.id === productId);
            if (!product) {
                console.error('Product not found:', productId);
                return;
            }

            const cartItem = this.items.find(item =>
                item.id === productId &&
                JSON.stringify(item.variation) === JSON.stringify(variation)
            );

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                this.items.push({
                    ...product,
                    quantity,
                    variation
                });
            }
            this.save();
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again.');
        }
    },

    removeItem(productId, variation) {
        try {
            this.items = this.items.filter(item =>
                !(item.id === productId && JSON.stringify(item.variation) === JSON.stringify(variation))
            );
            this.save();
        } catch (error) {
            console.error('Error removing item from cart:', error);
            alert('Failed to remove item from cart. Please try again.');
        }
    },

    updateQuantity(productId, variation, quantity) {
        try {
            const cartItem = this.items.find(item =>
                item.id === productId &&
                JSON.stringify(item.variation) === JSON.stringify(variation)
            );
            if (cartItem) {
                cartItem.quantity = Math.max(1, quantity);
                this.save();
            }
        } catch (error) {
            console.error('Error updating cart quantity:', error);
            alert('Failed to update quantity. Please try again.');
        }
    },

    updateBadge() {
        const badges = document.querySelectorAll('.cart-count');
        const totalCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        badges.forEach(badge => {
            badge.innerText = totalCount;
        });
    },

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
};

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => {
    Cart.updateBadge();
});
