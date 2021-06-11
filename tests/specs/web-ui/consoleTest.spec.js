describe('Console Test', () => {
  beforeEach(() => {
    browser.url('https://farhan-sauce.github.io/react-shopping-cart/');
  });

  it('should checkout cart', () => {
    // Add product
    const productQty = $('.product-1 .increment');
    const productAddToCart = $('.product-1 .product-action button');
    for (let i = 0; i < 15; i += 1) {
      productQty.click();
    }
    productAddToCart.click();

    // Add product
    const productQty2 = $('.product-2 .increment');
    const productAddToCart2 = $('.product-2 .product-action button');
    for (let i = 0; i < 15; i += 1) {
      productQty2.click();
    }
    productAddToCart2.click();

    // Add product
    const productQty3 = $('.product-3 .increment');
    const productAddToCart3 = $('.product-3 .product-action button');
    for (let i = 0; i < 15; i += 1) {
      productQty3.click();
    }
    productAddToCart3.click();

    // Add product
    const productQty4 = $('.product-4 .increment');
    const productAddToCart4 = $('.product-4 .product-action button');
    for (let i = 0; i < 15; i += 1) {
      productQty4.click();
    }
    productAddToCart4.click();

    // Checkout
    const cartIcon = $('.cart-icon');
    cartIcon.click();
    const cartItems = $$('.cart-items li');
    expect(cartItems.length).toBeGreaterThanOrEqual(4);
    const checkoutBtn = $('.cart-preview .action-block button');
    checkoutBtn.click();

    const cartItems2 = $$('.cart-items li');
    expect(cartItems2.length).toBe(0);
  });
});
