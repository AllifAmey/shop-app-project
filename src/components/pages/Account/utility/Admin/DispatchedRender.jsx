import Checkbox from "@mui/material/Checkbox";
import { patchOrders } from "../../../../services/Internal_API/AccountAPI/Orders/OrderAPI";

function DispatchedRender(props) {
  let checked = null;
  if (props.data.delivery_status === "Dispatched") {
    checked = true;
  } else if (props.data.delivery_status === "Processing Order") {
    checked = false;
  }
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          const current_index = props.rowData.indexOf(props.data);
          if (event.target.checked) {
            props.rowData[current_index].delivery_status = "Dispatched";
          } else {
            props.rowData[current_index].delivery_status = "Processing Order";
          }
          const data_to_update = props.rowData[current_index];
          const list_order = data_to_update.order.map((order) => {
            return order.order_item_id;
          });
          const patch_id = data_to_update.id;
          // TODO: Backend error related to timing or is it an error?
          // when dispatched the timing seemingly resets.
          const patchData = {
            id: patch_id,
            user: data_to_update.user,
            email: data_to_update.email,
            order: list_order,
            date_ordered: data_to_update.date_ordered,
            personal_info_used: data_to_update.personal_info_used.id,
            delivery_instructions: data_to_update.delivery_instructions,
            delivery_status: data_to_update.delivery_status,
            total_price: data_to_update.total_price,
          };
          patchOrders(props.setIsLoading, patch_id, patchData).then((data) => {
            if (data == "error") {
              console.log("There is an error");
              console.log(data);
            } else {
              props.setRowData([...props.rowData]);
            }
          });
        }}
      />
    </>
  );
}

export default DispatchedRender;
