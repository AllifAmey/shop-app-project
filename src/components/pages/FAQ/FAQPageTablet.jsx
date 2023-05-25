import * as React from "react";
import Container from "@mui/material/Container";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import { Grid } from "@mui/material";
import Question from "./utility/Question";
import Box from "@mui/material/Box";

function FAQPageTablet() {
  /*
    https://whatfix.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-13-at-12.21.26.png

    https://mui.com/material-ui/react-accordion/ 
    

    Accordion component is the one I am looking for.

    https://www.leadquizzes.com/wp-content/uploads/2020/07/screencapture-leadquizzes-pricing-2020-07-16-00_05_59.png - inspiration 
    
    docs - 
      logic for layout - 
        Accordians are used extensively to both showcase the question and the answer.
        This layout for the FAQ was chosen due to the lack of questions I can think of.
        scaling potential - 
        I have seperated the questions on a seperate widget and layed out the formatting for a ,
        future backend feature of the FAQ.
        Catagory was not seperated due to layout for catagories being unstable.
        What is stable are the questions and answers, they should look like this in the future.


      If there are more and as the ecommerce, or if, the ecommerce expands then consider using,
      a search bar type of layout. 
      In the search bar type of layout perhaps the backend, has to be used to better handle the 
      increasing amount of questions that would be posed . 


    */

  // I believe this will be the future structure for a backend :
  // faq_catagory model
  // model field above -
  // individual_catagory model attached to the above
  // model field above - charfield for catagory
  // question ( with answer) attached to the model above
  // model field above - charfield for question and charfield for answer
  const faq = {
    catagory: {
      delivery: {
        questions: [
          {
            question: "How do I know my item has been dispatched?",
            answer:
              "If you signed up to the shop, you can log in and find out if your orders have been dispatched on the order section. If not then a email should be sent upon dispatch.",
          },
          {
            question: "When can I expect to have my product delivered?",
            answer:
              "Unfortunately, once dispatched, how and when your product is delivered out of our control. We try to dispatch the product as soon as possible.",
          },
        ],
      },
      payment: {
        questions: [
          {
            question: "How do I get a refund?",
            answer:
              "You can email the owner via the contact page to request a refund.",
          },
          {
            question: "What type of payments do you accept?",
            answer:
              "We only accept Paypal at the moment but are looking to implement more down the line.",
          },
        ],
      },
    },
  };
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

export default FAQPageTablet;
