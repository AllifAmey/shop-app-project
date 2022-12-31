import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { Grid } from "@mui/material";

function FiltersIcon(props) {
  // basic template to creating test components.
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
            Items
          </Grid>
          {Object.keys(props.catagoriesAllowed).map((filter) => {
            const filter_name = filter;
            const filter_val = props.catagoriesAllowed[filter];
            return (
              <Grid container sx={filterItemStyle}>
                <Grid item sx={filterNameStyle}>
                  <Checkbox
                    inputProps={{ "aria-label": "controlled" }}
                    checked={filter_val}
                    onChange={(event) => {
                      let new_object = {
                        ...props.catagoriesAllowed,
                      };
                      new_object[`${filter_name}`] = event.target.checked;
                      props.setCatagoriesAllowed({
                        ...new_object,
                      });
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
