import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

function FiltersIconMobile(props) {
  // the left side of the shop
  // this side contains checkboxes which are used to determine
  // in the shop whether to display or not the products the user wants.

  const filterItemStyle = {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "20%",
    width: "100%",
  };
  const filterNameStyle = {
    width: "80%",
    fontSize: "12px",
  };
  return (
    <>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Grid fontSize={16}>Filter Items</Grid>
        {Object.keys(props.catagoriesAllowed).map((filter) => {
          // looks through the catagoriesAllowed
          // grabs the name of the filter
          // grabs the value attached to the name
          // inputs filter value in checked prop - false/true

          const filter_name = filter;
          const filter_val = props.catagoriesAllowed[filter];
          return (
            <Grid
              container
              flexDirection="column"
              key={filter_name}
              sx={filterItemStyle}
            >
              <Grid item sx={filterNameStyle}>
                <Checkbox
                  inputProps={{
                    "aria-label": `filter ${filter_name} checkbox`,
                    "data-cy": `${filter_name}`,
                  }}
                  size="small"
                  checked={filter_val}
                  onChange={(event) => {
                    // copies the current status to new_object
                    // but most importantly does not refer to it in memory by ,
                    // using ... operator.
                    // changes the value in the copied object in accordance,
                    // to event.target.checked
                    // then sets the new object to the catagoriesallowed via
                    // setCatagoriesAllowed
                    let new_object = {
                      ...props.catagoriesAllowed,
                    };
                    new_object[`${filter_name}`] = event.target.checked;
                    props.setCatagoriesAllowed({
                      ...new_object,
                    });
                    const preFilteredProducts = props.products.filter(
                      (product) => {
                        if (
                          !{
                            ...new_object,
                          }[product.catagory]
                        ) {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    );
                    props.setFilteredProducts([...preFilteredProducts]);
                  }}
                />
              </Grid>
              <Grid item>{filter_name}</Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default FiltersIconMobile;
