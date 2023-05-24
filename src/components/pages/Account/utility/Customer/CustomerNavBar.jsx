import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function CustomerNavBar(props) {
  /*
  Even though the component is called BottomNavigation,
  this is actually the mini navbar for customers sitting above the datagrid.

  The Navbar for customers includes two values 0 and 1, corresponding to
  "Cart" and "Orders" respectively. 

  https://mui.com/material-ui/react-bottom-navigation/ for reference.


  */

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={props.navValue}
        onChange={(event, newValue) => {
          props.setNavValue(newValue);
        }}
      >
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Orders" icon={<LocalShippingIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default CustomerNavBar;
