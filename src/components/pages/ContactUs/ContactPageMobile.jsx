import { useState } from "react";

// 3rd party components.
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { MuiTelInput } from "mui-tel-input";

// utility
import AnimatedPage from "../../utility/AnimatedPage";
import domain from "../../services/domain";

function ContactPageMobile() {
  /*

    docs: 
      read ContactPage.jsx docs.
      
   */

  const [emailContent, setEmailContent] = useState({
    fName: "",
    lName: "",
    your_name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (newPhone) => {
    setEmailContent({ ...emailContent, phone: newPhone });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let response = await fetch(`${domain}/api/shop/external`, {
      method: "POST",
      body: JSON.stringify({
        type: "email",
        content: JSON.stringify({
          first_name: emailContent.fName,
          last_name: emailContent.lName,
          your_name: emailContent.your_name,
          email: emailContent.email,
          phone_number: emailContent.phone,
          message: emailContent.msg,
        }),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      setError(true);
    } else {
      setSuccess(true);
      setEmailContent({
        fName: "",
        lName: "",
        your_name: "",
        email: "",
        phone: "",
        msg: "",
      });
      setError(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <AnimatedPage>
        <form onSubmit={sendEmail}>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
            padding="20px 0"
          >
            <Grid container flexDirection="column" textAlign="center" gap={1}>
              <Grid item fontSize="20px">
                Contact info
              </Grid>
              <Grid container w={1} justifyContent="space-evenly">
                <Grid item>
                  <MailOutlineIcon
                    titleAccess="Email"
                    sx={{ height: "30px", width: "30px", color: "#112A46" }}
                  />
                </Grid>
                <Grid item>Ameyssssd@aol.com</Grid>
                <Grid item>
                  <PhoneIcon
                    titleAccess="Phone"
                    sx={{ height: "30px", width: "30px", color: "#112A46" }}
                  />
                </Grid>
                <Grid item>07 305 588 089</Grid>
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              gap={2}
              width="80%"
            >
              <Grid item fontSize="20px">
                Get in Touch!
              </Grid>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                name="full_name"
                fullWidth
                value={emailContent.your_name}
                onChange={(e) => {
                  setEmailContent({
                    ...emailContent,
                    your_name: e.target.value,
                  });
                }}
              />

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                fullWidth
                value={emailContent.email}
                onChange={(e) => {
                  setEmailContent({
                    ...emailContent,
                    email: e.target.value,
                  });
                }}
              />
              <MuiTelInput
                defaultCountry="GB"
                value={emailContent.phone}
                onChange={handleChange}
                name="phone_number"
                label="Phone"
                fullWidth
              />
              <TextField
                id="filled-multiline-flexible"
                label="Message"
                multiline
                rows={5}
                fullWidth={true}
                size="big"
                name="message"
                value={emailContent.msg}
                onChange={(e) => {
                  setEmailContent({
                    ...emailContent,
                    msg: e.target.value,
                  });
                }}
              />
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  sx={{ fontSize: "12px", background: "#e3fafc" }}
                  type="submit"
                  aria-label="Submit email form"
                >
                  Send
                </Button>
              )}

              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  There was an error sending the message.
                </Alert>
              )}
              {success && (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Message sent!
                </Alert>
              )}
            </Grid>
          </Grid>
        </form>
      </AnimatedPage>
    </>
  );
}

export default ContactPageMobile;
