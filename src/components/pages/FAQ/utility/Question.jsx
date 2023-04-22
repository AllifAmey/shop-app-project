import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Question(props) {
  return (
    <>
      <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{props.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{props.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
}

export default Question;
