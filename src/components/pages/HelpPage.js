import * as React from "react";
import styles from "./HelpPage.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HelpPage() {
  /*
    https://whatfix.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-13-at-12.21.26.png

    https://mui.com/material-ui/react-accordion/ 
    

    Accordion component is the one I am looking for.

    https://www.leadquizzes.com/wp-content/uploads/2020/07/screencapture-leadquizzes-pricing-2020-07-16-00_05_59.png - inspiration 
    
    // contact us page 
    */
  return (
    <>
      <div>
        <div className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <span>Frequently Asked Questions</span>
          </div>
          <div className={styles["bottom-container"]}>
            <div className={styles["faq-container"]}>
              <div className={styles["faq-title"]}>Delivery</div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>What is standard delivery?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>What is Premium Delivery?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
