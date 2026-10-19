function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("добавляемое quantity меньше или равно 0");
  }
  const existing = cart.find((item) => item.id === product.id);
  const tempQuantity = (existing ? existing.quantity : 0) + quantity;
  if (tempQuantity > product.stock) {
    throw new RangeError("итоговое количество больше чем в остатках");
  }
  if (existing) {
    return cart.map((item) => (item.id === product.id ? { ...item, quantity: tempQuantity } : item));
  }
  return [...cart, { ...product, quantity: tempQuantity }];
}
function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError("добавляемое quantity меньше или равно 0");
  }

  const existing = cart.find((item) => item.id === productId);
  if (!existing) return [...cart];

  if (quantity > existing.stock) {
    throw new RangeError("итоговое количество больше чем в остатках");
  }

  return cart.map((item) => (item.id === productId ? { ...item, quantity } : item));
}
function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function calculateOrderTotal() {}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
