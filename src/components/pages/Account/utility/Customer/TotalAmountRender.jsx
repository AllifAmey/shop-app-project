function TotalAmountRender(props) {
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
