import * as React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimatedPopUpPage from "../utility/AnimatedPopUpPage";
import { Grid } from "@mui/material";

import Box from "@mui/material/Box";

function FAQPage() {
  /*
    https://whatfix.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-13-at-12.21.26.png

    https://mui.com/material-ui/react-accordion/ 
    

    Accordion component is the one I am looking for.

    https://www.leadquizzes.com/wp-content/uploads/2020/07/screencapture-leadquizzes-pricing-2020-07-16-00_05_59.png - inspiration 
    
    // contact us page 
    */
  return (
    <>
      <AnimatedPopUpPage>
        <Box height="auto" width={1} margin="1rem">
          <Container maxWidth="md" sx={{ height: "100vh" }}>
            <Grid
              container
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
              gap={4}
            >
              <Grid item alignSelf="center" fontSize={36} fontWeight={800}>
                Frequently Asked Questions
              </Grid>

              <Grid item container gap={2} justifyContent="center">
                <Grid item container flexDirection="column" width={0.4} gap={2}>
                  <Grid item textAlign="center" fontSize={30} fontWeight={800}>
                    Delivery
                  </Grid>
                  <Grid item width>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          How do I know my item has been delivered?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          When can I expect to have my product delivered?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
                <Grid item container flexDirection="column" width={0.5} gap={2}>
                  <Grid item textAlign="center" fontSize={30} fontWeight={800}>
                    Payment
                  </Grid>
                  <Grid item width>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>How do I get a refund?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          What type of payments do you accept?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AnimatedPopUpPage>
    </>
  );
}

export default FAQPage;
