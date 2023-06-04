import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Question from "./utility/Question";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import { faq } from "./utility/faq";

function FAQPageDesktop() {
  /*

    docs:
      read FAQPage.jsx docs.

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
                  {faq.catagory.delivery.questions.map((inquiry) => {
                    return (
                      <Question
                        key={inquiry.question}
                        question={inquiry.question}
                        answer={inquiry.answer}
                      />
                    );
                  })}
                </Grid>
                <Grid item container flexDirection="column" width={0.5} gap={2}>
                  <Grid item textAlign="center" fontSize={30} fontWeight={800}>
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AnimatedPopUpPage>
    </>
  );
}

export default FAQPageDesktop;
