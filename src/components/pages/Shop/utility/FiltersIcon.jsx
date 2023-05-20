import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { Grid } from "@mui/material";

function FiltersIcon(props) {
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
    fontSize: "20px",
  };
  return (
    <>
      <Grid
        item
        container
        alignSelf="start"
        flexDirection="column"
        justifyContent="start"
        alignContent="center"
        xs={2}
      >
        <Grid container flexDirection="column" height={0.5} width={0.9}>
          <Grid fontSize={30} textAlign="center" padding="20px 0 40px">
            Filter Items
          </Grid>
          {Object.keys(props.catagoriesAllowed).map((filter) => {
            // looks through the catagoriesAllowed
            // grabs the name of the filter
            // grabs the value attached to the name
            // inputs filter value in checked prop - false/true

            const filter_name = filter;
            const filter_val = props.catagoriesAllowed[filter];
            return (
              <Grid container key={filter_name} sx={filterItemStyle}>
                <Grid item sx={filterNameStyle}>
                  <Checkbox
                    inputProps={{
                      "aria-label": `filter ${filter_name} checkbox`,
                    }}
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
                  {filter_name}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default FiltersIcon;
