export const addItemToCartOrginal = (cartItems, newItem) => {
  const itemExist = cartItems.find((item) => item.id === newItem.id);

  if (itemExist) {
    return cartItems.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemExist) {
    const itemIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);
    cartItems[itemIndex] = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity + 1,
    };
  } else {
    cartItems.push({ ...itemToAdd, quantity: 1 });
  }
  return [...cartItems];
};

export const subtractItemFromCart = (cartItems, itemToSubtract) => {
  const itemExist = cartItems.find((item) => item.id === itemToSubtract.id);

  if (itemExist) {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === itemToSubtract.id
    );
    if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity - 1,
      };
    } else {
      cartItems.splice(itemIndex, 1);
    }
  }
  return [...cartItems];
};
