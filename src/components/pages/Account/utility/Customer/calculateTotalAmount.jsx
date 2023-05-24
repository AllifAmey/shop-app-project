function calculateTotalAmount(data) {
  // recieves data and calculates the total amount of the price
  // this is to adhere to DRY.
  console.log("I am data boy");
  console.log(data);
  const total_order_amount = data.reduce((initialValue, currentOrderItem) => {
    const currentTotalPrice = Number(
      (
        Number(currentOrderItem.product.price) * currentOrderItem.quantity
      ).toFixed(2)
    );
    return initialValue + currentTotalPrice;
  }, 0);
  return total_order_amount;
}

export default calculateTotalAmount;
