import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnimatedPage from "../../utility/AnimatedPage";
import { MuiTelInput } from "mui-tel-input";
import emailjs from "@emailjs/browser";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import domain from "../../services/domain";

function ContactPageTablet() {
  /**
   *https://i.ytimg.com/vi/ZafzM_z9PLs/maxresdefault.jpg
   Contact page with picture under the phone number.
   https://viclafouch.github.io/mui-tel-input/docs/getting-started/ phone number. 
   */

  /*
   docs - 
    Logic for layout-
      The way it works is simple. It's flexboxes on top of flexboxes to give the layout from the link above.
      The idea is to have a main flexbox and then to have a flexbox on top of that using absolute to move on top,
      and shift to the left to give this sort of feel that it is on top.
      The main reason for this design is due to intuition. I feel it looks good .
    
    future - 

    Perhaps the look of the layout needs to change but not much else.
    For scaling, perhaps turn the current backend into something that can handle emails which is possible.
    The emailjs usage is quite minimal but that is anticipating audience. 


   */

  const [emailContent, setEmailContent] = useState({
    fName: "",
    lName: "",
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
          your_name: emailContent.fName.concat(" ", emailContent.lName),
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
          <Grid height="50vh" width={1} position="relative">
            <Grid
              container
              height="80%"
              width="25%"
              backgroundColor="#99e9f2"
              textAlign="center"
              sx={{ position: "absolute", top: "30%", left: "5%", zIndex: 10 }}
            >
              <Grid fontSize="30px" width={1} paddingTop="1rem">
                Contact us
              </Grid>
              <Grid container width={1} justifyContent="space-evenly">
                <Grid item>
                  <MailOutlineIcon
                    titleAccess="Email"
                    sx={{ height: "40px", width: "40px", color: "#112A46" }}
                  />
                </Grid>
                <Grid item>Ameyssssd@aol.com</Grid>
              </Grid>
              <Grid container width={1} justifyContent="space-evenly">
                <Grid item>
                  <PhoneIcon
                    titleAccess="Phone"
                    sx={{ height: "40px", width: "40px", color: "#112A46" }}
                  />
                </Grid>
                <Grid item>07 305 588 089</Grid>
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              backgroundColor="#f1f3f5"
              height="100%"
              width="70%"
              textAlign="center"
              alignItems="center"
              sx={{ position: "absolute", right: "5%", top: "20%" }}
            >
              <Grid
                container
                flexDirection="column"
                justifyContent="space-evenly"
                width={0.8}
                height={1}
                alignItems="center"
              >
                <Grid item fontSize="30px">
                  Get in touch!
                </Grid>
                <Grid item container gap={3}>
                  <Grid item flex={1}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      size="big"
                      name="first_name"
                      fullWidth
                      value={emailContent.fName}
                      onChange={(e) => {
                        setEmailContent({
                          ...emailContent,
                          fName: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item flex={1}>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      size="big"
                      name="last_name"
                      fullWidth
                      value={emailContent.lName}
                      onChange={(e) => {
                        setEmailContent({
                          ...emailContent,
                          lName: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="space-evenly" gap={3}>
                  <Grid item flex={1}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="big"
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
                  </Grid>
                  <Grid item flex={1}>
                    <MuiTelInput
                      defaultCountry="GB"
                      value={emailContent.phone}
                      onChange={handleChange}
                      name="phone_number"
                    />
                  </Grid>
                </Grid>

                <TextField
                  id="filled-multiline-flexible"
                  label="Message"
                  multiline
                  rows={5}
                  fullWidth
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
                    size="big"
                    sx={{ fontSize: "15px", background: "#e6fcf5" }}
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
          </Grid>
        </form>
      </AnimatedPage>
    </>
  );
}

export default ContactPageTablet;
