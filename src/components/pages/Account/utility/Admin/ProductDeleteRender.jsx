import { Button } from "@mui/material";
import { deleteProducts } from "../../../../services/Internal_API/ShopAPI/Products/ProductsAPI";

function ProductDeleteRender(props) {
  // red button with the "Are you sure? pop up final warning"

  return (
    <>
      <Button
        variant="contained"
        style={{
          background: "#e03131",
          color: "#fff",
        }}
        onClick={() => {
          const current_index = props.rowData.indexOf(props.data);
          props.rowData.splice(current_index, 1);

          deleteProducts(props.setIsLoading, props.data.id).then((res) => {
            if (res !== "error") {
              props.setRowData([...props.rowData]);
            }
          });
        }}
      >
        Product Delete
      </Button>
    </>
  );
}

export default ProductDeleteRender;
