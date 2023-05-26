import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnimatedPage from "../../utility/AnimatedPage";
import { MuiTelInput } from "mui-tel-input";
import emailjs from "@emailjs/browser";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function ContactPageMobile() {
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

  const [phone, setPhone] = useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cwfc9gm",
        "template_2406ad3",
        form.current,
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <AnimatedPage>
        <form ref={form} onSubmit={sendEmail}>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
            height="80vh"
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
              />

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                fullWidth
              />
              <MuiTelInput
                defaultCountry="GB"
                value={phone}
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
              />
              <Button
                variant="contained"
                sx={{ fontSize: "12px", background: "#e3fafc" }}
                type="submit"
                aria-label="Submit email form"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </AnimatedPage>
    </>
  );
}

export default ContactPageMobile;
