import { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

import {
  Button,
  SvgIcon,
  Grid,
  Stepper,
  Step,
  StepButton,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Compressor from "compressorjs";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { postProducts } from "../../../../services/Internal_API/ShopAPI/Products/ProductsAPI";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_STORAGE_API_KEY,
  authDomain: "shop-app-project-366818.firebaseapp.com",
  projectId: "shop-app-project-366818",
  storageBucket: "shop-app-project-366818.appspot.com",
  messagingSenderId: "664782169591",
  appId: "1:664782169591:web:f166ce89c51f03c541baf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function DropboxUploadBtn(props) {
  // grabs the file from dropbox updates state on main create productpage

  const APP_KEY = import.meta.env.VITE_DROPBOX_API_KEY;

  function grabDataSimple(url) {
    fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        props.setImagePreview([URL.createObjectURL(blob)]);
        props.setStoreImage(blob);
      });
  }

  function handleDropBoxSuccess(files) {
    grabDataSimple(files[0].link);
  }

  return (
    <>
      <DropboxChooser
        appKey={APP_KEY}
        success={handleDropBoxSuccess}
        cancel={() => console.log("closed")}
        linkType="direct"
      >
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="28px"
            height="28px"
          >
            <path
              fill="#1E88E5"
              d="M42 13.976L31.377 7.255 24 13.314 35.026 19.732zM6 25.647L16.933 32.055 24 26.633 13.528 19.969zM16.933 7.255L6 14.301 13.528 19.969 24 13.314zM24 26.633L31.209 32.055 42 25.647 35.026 19.732z"
            />
            <path
              fill="#1E88E5"
              d="M32.195 33.779L31.047 34.462 29.979 33.658 24 29.162 18.155 33.646 17.091 34.464 15.933 33.785 13 32.066 13 34.738 23.988 42 35 34.794 35 32.114z"
            />
          </svg>
        </SvgIcon>
      </DropboxChooser>
    </>
  );
}

function AddProductForm() {
  // inspiration
  // https://toolset.com/wp-content/uploads/2020/09/add-product-front-end-1.png

  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [storeImage, setStoreImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [productInfo, setProductInfo] = useState({
    name: "",
    image_url: "",
    price: "",
    description_short: "",
    description_long: "",
    catagory: "",
  });
  const [descriptionShortSnippet, setDescriptionShortSnippet] = useState("");

  function UploadProduct() {
    const x = Math.random();
    let storageRef = ref(
      storage,
      `gs://shop-app-project-366818.appspot.com/images/product/${productInfo.name}-${x}`
    );
    new Compressor(storeImage, {
      quality: 0.6,
      width: 500,
      height: 500,
      success(result) {
        uploadBytes(storageRef, result).then((_) => {
          getDownloadURL(storageRef).then((url) => {
            // Insert url into an <img> tag to "download"
            const full_productInfo = { ...productInfo, image_url: url };

            // from here the url is grabbed from that storage and then placed inside of a django model
            // It is using this django model where the url to the firebase storage storing that image,
            // that will be referred and ripped from the json data and specified.

            postProducts(setIsLoading, full_productInfo).then((response) => {
              console.log(response);
            });
          });
        });
      },
      error(err) {
        console.log(err.message);
      },
    });
  }

  return (
    <>
      <Grid
        height={1}
        width={1}
        flex={1}
        bgcolor="#fff4f2"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        container
      >
        <Stepper nonlinear activeStep={activeStep}>
          <Step>
            <StepButton
              onClick={() => {
                setActiveStep(0);
              }}
            >
              Add Basic info
            </StepButton>
          </Step>
          <Step>
            <StepButton
              disabled={false}
              onClick={() => {
                setActiveStep(1);
              }}
            >
              Add descriptions
            </StepButton>
          </Step>
          <Step>
            <StepButton
              disabled={false}
              onClick={() => {
                setActiveStep(2);
              }}
            >
              Confirm
            </StepButton>
          </Step>
        </Stepper>
        <Grid
          height={0.8}
          width={0.8}
          container
          flexDirection="column"
          position="relative"
          gap="1rem"
        >
          {activeStep === 0 && (
            <>
              <Grid container justifyContent="space-between">
                <Grid container flexDirection="column" width={0.2} gap="1rem">
                  <Grid item>Product Name</Grid>
                  <Grid container>
                    <Grid item>
                      <TextField
                        id="standard-basic"
                        label="Product Name"
                        onChange={(e) => {
                          setProductInfo({
                            ...productInfo,
                            name: e.target.value,
                          });
                        }}
                        value={productInfo.name}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container flexDirection="column" gap="1rem" width={0.2}>
                  <Grid>Product Catagory</Grid>
                  <FormControl>
                    <InputLabel id="select-catagory">Catagory</InputLabel>
                    <Select
                      labelId="select-catagory"
                      label="Catagory"
                      onChange={(e) => {
                        setProductInfo({
                          ...productInfo,
                          catagory: e.target.value,
                        });
                        console.log(productInfo);
                      }}
                      value={productInfo.catagory}
                    >
                      <MenuItem value={"Pin Cushion"}>Pin Cushion</MenuItem>
                      <MenuItem value={"Bracelet"}>Bracelet</MenuItem>
                      <MenuItem value={"Ring"}>Ring</MenuItem>
                      <MenuItem value={"Pendant"}>Pendant</MenuItem>
                      <MenuItem value={"Earrings"}>Earrings</MenuItem>
                      <MenuItem value={"Brooches"}>Brooches</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid container flexDirection="column" gap="1rem" width={0.2}>
                  <Grid item>Product Price </Grid>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    type="number"
                    value={productInfo.price}
                    onChange={(e) => {
                      setProductInfo({
                        ...productInfo,
                        price: e.target.value,
                      });
                    }}
                    helperText="2 decimal places .00"
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid container flexDirection="column" gap="1rem" width={0.2}>
                  <Grid item fontSize="20px">
                    Product Image
                  </Grid>

                  <Grid container flexDirection="column" width={0.2}>
                    <Grid item>Grab From Computer</Grid>
                    <Grid item>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const selectedFile = event.target.files[0];
                          const objectUrl = URL.createObjectURL(selectedFile);
                          setImagePreview(objectUrl);
                          setStoreImage(selectedFile);
                        }}
                        onClick={(event) => {
                          event.target.value = "";
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container flexDirection="column" width={0.2}>
                    <Grid item> Grab From Dropbox </Grid>
                    <Grid item>
                      <DropboxUploadBtn
                        setStoreImage={setStoreImage}
                        setImagePreview={setImagePreview}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <img
                    src={imagePreview}
                    alt="Product"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Grid container gap="1rem">
                <Grid container flexDirection="column" xs gap="0.5rem">
                  <Grid item>Product Short Description</Grid>
                  <Grid item container>
                    <TextField
                      size="small"
                      sx={{ width: "90%" }}
                      value={descriptionShortSnippet}
                      onChange={(e) => {
                        setDescriptionShortSnippet(e.target.value);
                      }}
                    />
                    <IconButton
                      onClick={() => {
                        setProductInfo({
                          ...productInfo,
                          description_short:
                            productInfo.description_short +
                            `${descriptionShortSnippet}#`,
                        });
                        setDescriptionShortSnippet("");
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  {productInfo.description_short
                    .split("#")
                    .map((snippet, index) => {
                      if (snippet === "") {
                        return;
                      }
                      return (
                        <Grid container key={index}>
                          <Grid item>{snippet}</Grid>
                          <IconButton
                            onClick={() => {
                              // find a way to remove the shit.
                              const newDescriptionShort =
                                productInfo.description_short.replace(
                                  `${snippet}#`,
                                  ""
                                );
                              setProductInfo({
                                ...productInfo,
                                description_short: newDescriptionShort,
                              });
                            }}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </Grid>
                      );
                    })}
                </Grid>

                <Grid container flexDirection="column" gap="1rem" xs>
                  <Grid item>Product Long Description</Grid>
                  <TextField
                    id="filled-multiline-flexible"
                    label="Long description"
                    multiline
                    rows={5}
                    maxRows={10}
                    size="big"
                    name="description_long"
                    value={productInfo.description_long}
                    onChange={(e) => {
                      setProductInfo({
                        ...productInfo,
                        description_long: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Grid container flexDirection="column">
                <Grid item>Name</Grid>
                <Grid item color="orange">
                  {productInfo.name === "" ? "Empty" : productInfo.name}
                </Grid>
                <Grid item>Price</Grid>
                <Grid item color="orange">
                  {productInfo.price === "" ? "Empty" : productInfo.price}
                </Grid>
                <Grid item>Catagory:</Grid>
                <Grid item color="orange">
                  {productInfo.catagory === "" ? "Empty" : productInfo.catagory}
                </Grid>
                <Grid item>Image</Grid>
                <Grid item color="orange">
                  {productInfo.image_url === ""
                    ? "Empty"
                    : productInfo.image_url}
                </Grid>
                <Grid item>Description Long</Grid>
                <Grid item color="orange">
                  {productInfo.description_long === ""
                    ? "Empty"
                    : productInfo.description_long}
                </Grid>
                <Grid item>Description Short</Grid>
                <Grid item color="orange">
                  {productInfo.description_short === ""
                    ? "Empty"
                    : productInfo.description_short}
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    UploadProduct();
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </>
          )}
          {activeStep > 0 && (
            <Grid item sx={{ position: "absolute", bottom: 20, left: 20 }}>
              <Grid
                item
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  width: "100px",
                }}
              >
                <Button
                  variant="text"
                  size="big"
                  onClick={() => {
                    setActiveStep(activeStep - 1);
                  }}
                >
                  Back Step
                </Button>
              </Grid>
            </Grid>
          )}
          {activeStep < 2 ? (
            <>
              <Grid item sx={{ position: "absolute", bottom: 20, right: 20 }}>
                <Button
                  variant="text"
                  size="big"
                  onClick={() => {
                    setActiveStep(activeStep + 1);
                  }}
                >
                  Next Step
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item sx={{ position: "absolute", bottom: 20, right: 20 }}>
              <Button
                variant="text"
                size="big"
                onClick={() => {
                  setActiveStep(3);
                }}
              >
                Complete
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default AddProductForm;
