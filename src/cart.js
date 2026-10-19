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
    throw new RangeError("итоговое количество из шага 2 больше");
  }
  if (existing) {
    return cart.map((item) => (item.id === product.id ? { ...item, quantity: tempQuantity } : item));
  }
  return [...cart, { ...product, quantity: tempQuantity }];
}
function changeQuantity() {}
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
