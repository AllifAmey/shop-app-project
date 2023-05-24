import Tab from "@mui/material/Tab";

function SideTabs() {
  return (
    <>
      <Tab
        label="DashBoard"
        icon={<i className="fa-solid fa-chart-line"></i>}
        iconPosition="end"
      />
      <Tab
        label="Products"
        sx={{ justifyContent: "space-evenly" }}
        icon={<i className="fa-sharp fa-solid fa-gem"></i>}
        iconPosition="end"
      />
      <Tab
        label="Add Product"
        icon={<i className="fa-solid fa-basket-shopping"></i>}
        iconPosition="end"
      />
      <Tab
        label="Orders"
        sx={{ justifyContent: "space-evenly" }}
        icon={<i className="fa-sharp fa-solid fa-truck"></i>}
        iconPosition="end"
      />
      <Tab
        label="Refunds sent"
        sx={{ justifyContent: "space-evenly" }}
        icon={<i className="fa-solid fa-money-bill-wave"></i>}
        iconPosition="end"
      />
      <Tab
        label="Logout"
        onClick={() => {
          //props.logOut();
          console.log("hello");
        }}
        icon={<i className="fa-solid fa-right-from-bracket"></i>}
        iconPosition="end"
      />
    </>
  );
}

export default SideTabs;
