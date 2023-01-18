import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { postProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DropboxUploadBtn from "./utility/DropboxUploadBtn";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_STORAGE_API_KEY,
  authDomain: "shop-app-project-366818.firebaseapp.com",
  projectId: "shop-app-project-366818",
  storageBucket: "shop-app-project-366818.appspot.com",
  messagingSenderId: "664782169591",
  appId: "1:664782169591:web:f166ce89c51f03c541baf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function UploadButtons(props) {
  /* function uploadedfiles(event) {
    const files = event.target.files;
    console.log(files);
    uploadBytes(storageRef, files[0]).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    getDownloadURL(storageRef).then((url) => {
      // Insert url into an <img> tag to "download"
      console.log(url);
    });
  } */
  function testMainFiles(event) {
    if (event.target.files.length > 1) {
      props.setMainError(true);
      return;
    }
    const file = event.target.files[0];
    console.log(`file is ${file}`);
    console.log([URL.createObjectURL(file)]);
    console.log(file);

    props.setMainImage([URL.createObjectURL(file)]);
    props.setStoreMainImage([file]);
  }
  function testMultipleFiles(event) {
    const files = event.target.files;
    let fileUrls = [];
    let fileStorage = [];
    if (files.length > 3) {
      props.setSideError(true);
      return;
    }
    Array.from(files).forEach((file) => {
      fileStorage.push(file);
      fileUrls.push(URL.createObjectURL(file));
    });
    props.setSideImages([...fileUrls]);
    props.setStoreSideImages([...fileStorage]);
    props.setSideError(false);
  }
  // onChange={uploadedfiles} add to <input> when ready.
  // onClick={uploadedfiles} add to IconButton when ready.
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        {props.main == "main" ? (
          <input hidden accept="image/*" type="file" onChange={testMainFiles} />
        ) : (
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={testMultipleFiles}
            multiple
          />
        )}
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}

function CreateProduct() {
  // first test the post method api and make sure that it works,
  // do the test step by step.
  // then once the api fully works
  // work on integrating firebase into it.
  // then from there once firebase has been fully intergrated the product is complete.
  /*
   {
  "name": "string",
  "image_url": "https://imgur.com/87D0Ltp",
  "price": "-724",
  "description_short": "string",
  "description_long": "string",
  "catagory": "string"
  }
  */
  // URL.createObjectURL(event.target.files[0]);

  const [shortDescriptionDetail, setshortDescriptionDetail] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  const [storeMainImage, setStoreMainImage] = useState([]);
  const [sideImages, setSideImages] = useState([]);
  const [storeSideImages, setStoreSideImages] = useState([]);
  const [catagory, setCatagory] = useState("");

  const handleChange = (event) => {
    setCatagory(event.target.value);
  };

  const [mainError, setMainError] = useState(false);
  const [sideError, setSideError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, [shortDescriptionDetail]);

  const product_name = useRef(""),
    product_prize = useRef(""),
    short_description = useRef(""),
    long_description = useRef("");

  function addShortDescriptionBtn() {
    // reason for this is useState compares the values of the previous array
    // if it sees it is the same then it needs not change
    // adding a new array tells useState this is a completely new value so it updates,
    // immediately.

    setshortDescriptionDetail([
      ...shortDescriptionDetail,
      short_description.current.value,
    ]);
    short_description.current.value = "";
  }
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  function uploadedProduct(storageRef, file, productInfo) {
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(storageRef).then((url) => {
        // Insert url into an <img> tag to "download"
        const full_productInfo = { ...productInfo, image_url: url };

        postProducts(setIsLoading, full_productInfo).then((response) => {
          console.log(response);
        });
      });
    });
  }

  async function onSubmit() {
    const x = Math.random();
    let storageRef = ref(
      storage,
      `gs://shop-app-project-366818.appspot.com/images/product/${product_name.current.value}-main-${x}`
    );

    let productInfo = {
      name: product_name.current.value,
      price: product_prize.current.value,
      description_short: shortDescriptionDetail.join("#"),
      description_long: long_description.current.value,
      catagory: catagory,
    };

    if (storeMainImage.length == 0) {
      productInfo = {
        name: product_name.current.value,
        price: product_prize.current.value,
        description_short: shortDescriptionDetail.join("#"),
        description_long: long_description.current.value,
        catagory: catagory,
        image_url: mainImage[0],
      };
      console.log(productInfo);
      postProducts(setIsLoading, productInfo).then((data) => {
        console.log(data);
      });
    } else {
      console.log("I am here");
      console.log(`store main imagine is ${storeMainImage[0]}`);
      uploadedProduct(storageRef, storeMainImage[0], productInfo);
    }

    // temporary a upload image api will be created later
    // use storeSideImages and loop through to upload all of it
    // TODO: STRONGLY consider using a api that processes the image and returns a compressed version or something.
    // or else this will cost a lot of money down the road.
  }

  return (
    <>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>
          Upload Or Choose Files to DropBox
        </h1>
        <br />
        <br />
        <Grid container justifyContent="center" className="container"></Grid>
      </div>
      {isLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress size="25rem" sx={{ margin: "auto" }} />
        </Grid>
      ) : (
        <Box height="auto">
          <Container maxWidth="lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                height="150vh"
                width={1}
                flexDirection="column"
                justifyContent="space-evenly"
                alignContent="center"
              >
                <Grid item fontSize="50px" textAlign="center">
                  Create Product
                </Grid>
                <Grid item container flexDirection="column" width={0.2} gap={2}>
                  <Grid item> Product Name</Grid>
                  <TextField
                    id="outlined-basic"
                    label="Product Name"
                    variant="outlined"
                    size="small"
                    inputRef={product_name}
                  />
                </Grid>

                <Grid item container width={0.5} justifyContent="space-evenly">
                  <Grid
                    item
                    container
                    flexDirection="column"
                    width={0.2}
                    gap={2}
                  >
                    <Grid item> Product Catagory</Grid>
                    <Select label="Age" onChange={handleChange}>
                      <MenuItem value={"Bracelet"}>Bracelet</MenuItem>
                      <MenuItem value={"Ring"}>Ring</MenuItem>
                      <MenuItem value={"Pendant"}>Pendant</MenuItem>
                      <MenuItem value={"Earrings"}>Earrings</MenuItem>
                      <MenuItem value={"Brooches"}>Brooches</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    item
                    container
                    flexDirection="column"
                    width={0.2}
                    gap={2}
                  >
                    <Grid item> Product Price</Grid>
                    <Grid item>
                      <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        size="small"
                        type="number"
                        InputProps={{ inputProps: { step: ".01" } }}
                        inputRef={product_prize}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container justifyContent="space-evenly" width={0.5}>
                  <Grid
                    item
                    container
                    flexDirection="column"
                    width={0.5}
                    gap={2}
                  >
                    <Grid item>Add Short Description</Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        size="small"
                        inputRef={short_description}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={addShortDescriptionBtn}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item container width={0.5}>
                    {shortDescriptionDetail.map((detail) => {
                      const index = shortDescriptionDetail.indexOf(detail);
                      let deleted_arr = [...shortDescriptionDetail];
                      deleted_arr.splice(index, 1);

                      return (
                        <Grid item container justifyContent="space-evenly">
                          <Grid item>{detail}</Grid>
                          <Grid item>
                            <Button
                              variant="text"
                              size="small"
                              onClick={() => {
                                setshortDescriptionDetail([...deleted_arr]);
                              }}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid item container justifyContent="space-evenly" width={0.5}>
                  <Grid
                    item
                    container
                    flexDirection="column"
                    width={0.5}
                    gap={2}
                  >
                    <Grid item>
                      Add <b>Main</b> Pictures
                    </Grid>
                    <Grid
                      item
                      container
                      width={0.5}
                      justifyContent="space-evenly"
                      gap={4}
                    >
                      <Grid item container>
                        <Grid item>
                          <UploadButtons
                            main={"main"}
                            setMainImage={setMainImage}
                            setSideImages={setSideImages}
                            setMainError={setMainError}
                            setStoreMainImage={setStoreMainImage}
                          />
                        </Grid>
                        <Grid item>
                          <DropboxUploadBtn
                            setMainImage={setMainImage}
                            setStoreMainImage={setStoreMainImage}
                          />
                        </Grid>
                      </Grid>
                      <Grid item container>
                        {mainError
                          ? "Error uploading picture!"
                          : mainImage.map((imgUrl) => {
                              return (
                                <Grid
                                  item
                                  component="img"
                                  src={imgUrl}
                                  height="100px"
                                  width="100px"
                                ></Grid>
                              );
                            })}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container width={0.5}></Grid>
                </Grid>
                <Grid item container justifyContent="space-evenly" width={0.5}>
                  <Grid
                    item
                    container
                    flexDirection="column"
                    width={0.5}
                    gap={2}
                  >
                    <Grid item>
                      Adding <b>Side</b> Pictures
                    </Grid>
                    <Grid item>
                      <UploadButtons
                        setSideImages={setSideImages}
                        setMainImage={setMainImage}
                        setSideError={setSideError}
                        setStoreSideImages={setStoreSideImages}
                      />
                    </Grid>
                    <Grid item container>
                      {sideError
                        ? "Error uploading picture!"
                        : sideImages.map((imgUrl) => {
                            return (
                              <Grid
                                item
                                component="img"
                                src={imgUrl}
                                height="100px"
                                width="100px"
                              ></Grid>
                            );
                          })}
                    </Grid>
                  </Grid>
                  <Grid item container width={0.5}></Grid>
                </Grid>
                <Grid item container flexDirection="column" width={0.5} gap={2}>
                  <Grid item>Add long Description</Grid>
                  <Grid item>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Long description"
                      multiline
                      rows={5}
                      maxRows={10}
                      fullWidth={true}
                      size="big"
                      name="long_description"
                      inputRef={long_description}
                    />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="space-evenly" width={0.5}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      // preview here.
                    }}
                  >
                    Preview
                  </Button>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      )}
    </>
  );
}

export default CreateProduct;
