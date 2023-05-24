function TotalAmountRender(props) {
  /**
   * docs:
   * props.data is the returned cart item data
   * props.value is only defined for the total amount of all cart items
   * Point for this component is to render the total amount for each cart item
   * And all cart items put together.
   */
  return (
    <>
      <div>
        {props.value === undefined &&
          `£${(props.data.quantity * Number(props.data.product.price)).toFixed(
            2
          )}`}
        {props.value !== undefined && props.value}
      </div>
    </>
  );
}

export default TotalAmountRender;
