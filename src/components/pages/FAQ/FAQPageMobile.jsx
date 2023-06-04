import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Question from "./utility/Question";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import { faq } from "./utility/faq";

function FAQPageMobile() {
  /*

    docs:
      read FAQPage.jsx docs.

  */

  return (
    <>
      <AnimatedPopUpPage>
        <Box height="auto" margin="1rem">
          <Container maxWidth="md">
            <Grid
              container
              flexDirection="Column"
              textAlign="center"
              gap="1rem"
            >
              <Grid item fontSize="24px">
                Frequently Asked Questions
              </Grid>
              <Grid item fontWeight={800} fontSize="20px">
                Delivery
              </Grid>
              {faq.catagory.delivery.questions.map((inquiry) => {
                return (
                  <Question
                    key={inquiry.question}
                    question={inquiry.question}
                    answer={inquiry.answer}
                  />
                );
              })}
              <Grid item fontWeight={800} fontSize="20px">
                Payment
              </Grid>
              {faq.catagory.payment.questions.map((inquiry) => {
                return (
                  <Question
                    key={inquiry.question}
                    question={inquiry.question}
                    answer={inquiry.answer}
                  />
                );
              })}
            </Grid>
          </Container>
        </Box>
      </AnimatedPopUpPage>
    </>
  );
}

export default FAQPageMobile;
