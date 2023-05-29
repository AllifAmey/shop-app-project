import { useState } from "react";
import styles from "./ContactPageDesktop.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnimatedPage from "../../utility/AnimatedPage";
import { MuiTelInput } from "mui-tel-input";
import emailjs from "@emailjs/browser";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import domain from "../../services/domain";

function ContactPageDesktop() {
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
          <div className={styles["main-container"]}>
            <div className={styles["contact-container"]}>
              <div className={styles["content-container"]}>
                <div className={styles["contactInfo-container"]}>
                  <div className={styles["contactInfo-box"]}>
                    <div className={styles["contactInfo-title"]}>
                      Contact Info
                    </div>
                    <div className={styles["contactInfo-item"]}>
                      <MailOutlineIcon
                        titleAccess="Email"
                        sx={{ height: "40px", width: "40px", color: "#112A46" }}
                      />
                      <div className={styles["contactInfo-text"]}>
                        <div>Ameyssssd@aol.com</div>
                      </div>
                    </div>
                    <div className={styles["contactInfo-item"]}>
                      <PhoneIcon
                        titleAccess="Phone"
                        sx={{ height: "40px", width: "40px", color: "#112A46" }}
                      />
                      <div className={styles["contactInfo-text"]}>
                        <div>07 305 588 089</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["contactInfo-links"]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40px"
                      height="40px"
                      aria-labelledby="youtubeTitle youtubeDesc"
                    >
                      <title id="youtubeTitle">Youtube Icon</title>
                      <desc id="youtubeDesc">
                        A icon representing Youtube's logo
                      </desc>
                      <path
                        fill="#FF3D00"
                        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                      />
                      <path fill="#FFF" d="M20 31L20 17 32 24z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="35px"
                      height="35px"
                      aria-labelledby="etsyTitle etsyDesc"
                    >
                      <title id="etsyTitle">Etsy Icon</title>
                      <desc id="etsyDesc">
                        A illustrated orange circle with the word Etsy in white
                        letters representing Etsy
                      </desc>
                      <path
                        fill="#F6851F"
                        d="M474.2,161.7c-16.1-46.6-46.7-87.1-91.3-109.6c-50.9-25.6-111-28.1-166.4-19.3C166.7,40.8,114.2,58.8,76.9,94c-19.6,18.5-34.7,40.9-42.7,66.8c-8,26-10.4,53.1-12.1,80.1c-0.1,1.1-0.4,2-1,2.7c0,0.2,0.1,0.5,0.1,0.8c0,52.9-1.1,108.3,30.1,153.9c25.3,37.1,64.5,61.5,107.2,73.7c88,25.2,194.2,9.6,264.9-50.8C497.5,357.9,504.3,248.9,474.2,161.7z"
                      />
                      <path d="M487.8,168.7c-14.2-46.9-40.9-88.3-82-115.7C359.5,22,300.5,14.5,246,18.5c-51.7,3.8-104.6,17.9-148.6,46c-21.6,13.8-40.9,31.9-55,53.4c-14.9,22.7-22.5,48.8-26.6,75.4c-2.3,15.1-3.4,30.3-4.4,45.6c-0.1,0.9,0.1,1.8,0.4,2.6c-0.9,0.9-1.5,2.2-1.5,3.8c0,30.1-0.6,60.4,4.6,90.2c4.8,27.1,15.2,52.9,31.6,75.1c29.2,39.5,73.5,63.3,120.4,75c88.9,22.2,194.2,3.7,264.5-57.1C505.5,364.4,514.7,257.6,487.8,168.7z M423.4,421.2c-70.8,60.4-176.9,76-264.9,50.8c-42.7-12.2-81.9-36.6-107.2-73.7c-31.1-45.6-30.1-101-30.1-153.9c0-0.3,0-0.5-0.1-0.8c0.5-0.7,0.9-1.6,1-2.7c1.7-27,4.1-54.1,12.1-80.1c7.9-25.9,23.1-48.3,42.7-66.8c37.3-35.2,89.8-53.2,139.6-61.1c55.5-8.8,115.5-6.4,166.4,19.3c44.6,22.5,75.1,63.1,91.3,109.6C504.3,248.9,497.5,357.9,423.4,421.2z" />
                      <path
                        fill="#D6E5E5"
                        d="M215.4 306.9c-1.3-7.5-2.6-15-4.5-22.4-1.4-5.7-10.3-5.8-11.6.1-.1.6-.3 1.2-.6 1.8-1.6.5-3 1.7-3.7 3.5-6.2 2.1-5.8 12.6 1.4 11.7.6-.1 1.1-.2 1.6-.3 1.3.5 2.8.5 4.1.2l.1.6c-25.6-1.3-51.3-.3-76.9-1.4-4-18 .3-37.9.6-56l41.6 2.8c.5.9 1.1 1.8 1.8 2.7 2.4 3 5.9 2.2 8.1 0 2 .7 4.4-.1 6-1.6l.4 0c3.4.2 5.7-3 5.9-6.1l.1-2c.1-1.8-1.2-4.4-3-5.1-.6-.3-1.3-.5-1.9-.8-.9-1.2-2.3-1.8-3.8-2-.2-.1-.5-.3-.7-.4 0-.1 0-.2 0-.3-.2-4.5-3.9-6.3-7.2-5.6-3.7-2.2-8.5 1.1-8.8 5.4-.1 1.2-.1 2.4-.1 3.6l-38.9-2.7c-1.6-21.9-7.4-43.6-4.9-65.5 20.8-.3 41.7-2 62.4-1l-.5 6.7c-.3 3.8 2.6 5.7 5.6 5.7 0 .2 0 .4 0 .7-.1 7.8 11.5 7.5 12-.1.4-5.6 1-10.9 3-16.2 1.5-4.1-2.4-7.1-5.9-7.5-32.6-4.1-65.5 1.4-98.2-.7-7.7-.5-7.6 11.5.1 12 3.1.2 6.3.3 9.4.4-2.2 25.5 4.9 50.4 5.2 75.9.2 17.5-3.6 35.9-1.5 53.4-4.9.4-9.8 1.6-14.6 2.9-6.9 1.8-4.9 11.3 1.6 11.8l12 .8c1.2.1 2.2-.1 3-.6.6.4 1.3.7 2.1.9 2.3 2.8 6.6 2.6 9 .6 27.9 1.3 55.9-.1 83.9 1.8C213.8 314.8 216 310.4 215.4 306.9zM303.2 287.2l.2-2.9c.4-6.6-10.4-8.1-11.7-1.9-1.8.4-3.5 1.8-4.3 4.1-.6 1.6-1 3-1.3 4.7-.1.4-.1.8-.2 1.2-1.4 1.7-1.9 4-.7 6.2-2.6.5-5.3.6-7.7.7-9.8.4-20.3-.5-25.2-10.5-2.6-5.4-2.7-12.2-3-18.1-.4-9.3-.9-18.6-1-27.8 0-8.6.4-17.2 1-25.8 9.1-.8 18.2-1.9 27.2-2.3 7.8-.4 7.5-11.4-.1-12-6.7-.5-13.4-1.5-20.2-1.9-1.7-.1-3.7-.2-5.7 0 .7-8.1 1.4-16.2 2-24.3.5-7.7-11.5-7.6-12 .1-.1 1.7-.2 3.3-.4 5-1 .7-1.7 1.8-2.1 3.2-2.8 10.9-10.7 17.6-21.5 20.1-5.6 1.3-5.9 10.6.1 11.6 6.9 1.2 13.8 1.4 20.7 1.2-.8 12.3-1.3 24.6-.8 37 .7 15.9-1.2 36.4 11.4 48.3 9.6 9.1 25.5 9.3 37.8 7.5 5.7-.8 11.7-2.6 15.8-6.8C306 299 305.7 292.7 303.2 287.2zM370.8 264.4c-7.5-16.2-26.1-12-40.3-16.1-6.4-1.8-13.5-8.4-13.8-15.2 0-1-.2-.4.6-1.6-.1.1 1-.7 1.7-1.1 2.5-1.4 5.9-2 8.8-2.3 5.1-.6 10.3-.7 15.4-.5 1.3 1.1 2.8 1.9 4.4 2.1-.3.8-.6 1.6-.6 2.5l-.4 6c-.2 3.3 3 6 6.1 5.9 3.5 0 5.7-2.8 5.9-6.1l.4-6c.1-1.9-.9-3.5-2.3-4.6.4-.3.8-.7 1.2-1 3.9-3.4 1.2-8.7-2.9-10-1.8-2.7-5.9-3-8.7-1-.5 0-.9 0-1.4.1-11.6-.7-24.7-.8-33.8 5.6-6.4 4.5-8 12.1-5.1 19.2 3.6 9.1 10.4 15.6 19.4 19.1 7.2 2.8 15.1 2.4 22.6 3.5 7.4 1 11.5 3.8 13.1 11.3 1 4.4 1.1 9.7.1 14.1-1 4.1-4.4 6.2-7.9 8-6.4 3.2-19.6 8.3-26.1 3.1-.5-.4-.9-.8-1.2-1.3-.1-.1-.1-.3-.2-.4.1-1.3.8-2.7 1.1-3.9.7-2.4 1.5-4.8 2-7.2.1-.3.1-.6.2-.8 0 0 0 0-.1 0 .1-.5.2-1 .3-1.6.7-5.5-7-7.4-10.3-4.2l-1.8-.1c-3.2-.2-6 3-5.9 6.1.1 3.8 1.8 5.2 3.4 7.6-.2.8-.4 1.6-.6 2.4-.8 5.1 1.5 9.4 5.5 12.6 8.2 6.5 19.9 5.3 29.2 2.4 8.9-2.8 18.9-7 22.8-16.1C375.7 285.8 374.9 273.2 370.8 264.4z"
                      />
                      <path
                        fill="#D6E5E5"
                        d="M450.7,213C450.6,213,450.6,213,450.7,213c-0.8-5-9-6.4-11.6-1c-0.2,0-0.3,0-0.5,0.1c-3.4,0-6.8,0.3-10,1.5c-6.5,2.3-5.2,11.3,1.6,11.8c1.4,0.1,2.8,0.2,4.2,0.2c-6.2,18.3-12.6,36.6-20.5,54.3c-4.2-8.4-8.4-16.8-12.1-25.4c-2.6-6.1-5-12.3-6.9-18.7c-1.1-4-2.3-8.9-1.2-11.8c0.4-1.2,0.3-2.4-0.1-3.5c1.2-3.4-0.6-7.7-5.5-8l-10-0.7c-6.7-0.5-8.2,10.6-1.5,11.8c0.1,0,0.3,0.1,0.4,0.1c0.8,1.4,2.2,2.4,4.1,2.4c-0.1,3.4,0.7,6.9,1.4,10.1c1.7,7.2,4.5,14.2,7.4,21c4.9,11.6,10.5,22.8,16.3,34c0.4,0.8,0.9,1.3,1.4,1.8c-0.6,1.2-1.2,2.4-1.9,3.6c-10.4,19.8-24.2,39.3-42.9,51.6c-4.2,0.9-9,0.8-12.9,1.6c-7.1,1.4-12.2,6.5-11.9,14c0.2,3.7,3.8,6.9,7.6,5.7c8-2.5,15.4-6,22.1-10.3c2.1-0.5,4.2-1.3,6.2-2.4c1.7-1,2.6-2.5,2.8-4c15.5-12.4,27.7-29.1,37.4-46.7c14.1-25.5,23.4-53.2,32.8-80.7c2.2-0.2,4.5-0.4,6.8-0.8C461.5,223.3,458.2,211.8,450.7,213z"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles["email-container"]}>
                  <div className={styles["email-title"]}>Send a Message</div>
                  <div className={styles["email-fName"]}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      size="big"
                      name="first_name"
                      value={emailContent.fName}
                      onChange={(e) => {
                        setEmailContent({
                          ...emailContent,
                          fName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={styles["email-lName"]}>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      size="big"
                      name="last_name"
                      value={emailContent.lName}
                      onChange={(e) => {
                        setEmailContent({
                          ...emailContent,
                          lName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={styles["email-address"]}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="big"
                      type="email"
                      name="email"
                      value={emailContent.email}
                      onChange={(e) => {
                        setEmailContent({
                          ...emailContent,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={styles["email-mobile"]}>
                    <MuiTelInput
                      defaultCountry="GB"
                      value={emailContent.phone}
                      onChange={handleChange}
                      name="phone_number"
                    />
                  </div>
                  <div className={styles["email-message"]}>
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
                  </div>
                  <div className={styles["email-btn"]}>
                    {isLoading ? (
                      <CircularProgress />
                    ) : (
                      <Button
                        variant="contained"
                        size="big"
                        sx={{ fontSize: "15px" }}
                        type="submit"
                        aria-label="Submit email form"
                      >
                        Send
                      </Button>
                    )}
                  </div>
                  <div className={styles["email-status"]}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </AnimatedPage>
    </>
  );
}

export default ContactPageDesktop;
