import React, { useState, useEffect, useRef, useMemo } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Input } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Checkbox from "@mui/material/Checkbox";
import { cartActions } from "../../../store";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { getProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import {
  getOrders,
  patchOrders,
} from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";
import DropboxChooser from "react-dropbox-chooser";
import SvgIcon from "@mui/material/SvgIcon";

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

function DispatchedRender(props) {
  let checked = null;
  if (props.data.delivery_status === "Dispatched") {
    checked = true;
  } else if (props.data.delivery_status === "Processing Order") {
    checked = false;
  }
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          const current_index = props.rowData.indexOf(props.data);
          if (event.target.checked) {
            props.rowData[current_index].delivery_status = "Dispatched";
          } else {
            props.rowData[current_index].delivery_status = "Processing Order";
          }
          const data_to_update = props.rowData[current_index];
          const list_order = data_to_update.order.map((order) => {
            return order.order_item_id;
          });
          const patch_id = data_to_update.id;
          // potential error, check this out later.
          const patchData = {
            user: data_to_update.user,
            email: data_to_update.email,
            order: list_order,
            date_ordered: data_to_update.date_ordered,
            personal_info_used: data_to_update.personal_info_used.id,
            delivery_instructions: data_to_update.delivery_instructions,
            delivery_status: data_to_update.delivery_status,
            total_price: data_to_update.total_price,
          };
          patchOrders(props.setIsLoading, patch_id, patchData).then((data) => {
            if (data == "error") {
              console.log("There is an error");
            } else {
              props.setRowData([...props.rowData]);
            }
          });
        }}
      />
    </>
  );
}

function UrgencyLevelRender(params) {
  const date1 = new Date(params.data.date_ordered);
  const date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let color = "";
  if (diffDays > 7) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <>
      <Grid>
        <Grid item color={color}>
          {diffDays}days ago!
        </Grid>
      </Grid>
    </>
  );
}

function ItemsOrderedRender(params) {
  // renders item ordered on the admin page

  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);
  const [storePic, setStorePic] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const total_order_amount = params.data.order.reduce(
    (initialValue, currentOrderItem) => {
      const currentTotalPrice = Number(
        (
          Number(currentOrderItem.product.price) * currentOrderItem.quantity
        ).toFixed(2)
      );
      return initialValue + currentTotalPrice;
    },
    0
  );
  const headingSize = { fontSize: "20px" };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        View Items
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "90%",
            maxWidth: "70%",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            lineHeight: "1.5rem",
            padding: "1rem",
          }}
        >
          <Grid container sx={{}}>
            <Grid container flexDirection="Column" textAlign="center">
              <Grid sx={headingSize}>Products ordered</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              marginBottom="1rem"
            >
              <Grid item sx={headingSize}>
                Personal Information
              </Grid>
              <Grid item>
                {`${params.data.personal_info_used.first_name} ${params.data.personal_info_used.last_name}`}
              </Grid>
              <Grid item>{params.data.personal_info_used.email}</Grid>
              <Grid item>{params.data.personal_info_used.phone_number}</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              textAlign="end"
              height="30%"
              marginBottom="1rem"
            >
              <Grid item sx={headingSize}>
                Address
              </Grid>
              {params.data.personal_info_used.address.split("#").map((e) => {
                return <Grid item>{e}</Grid>;
              })}
              <Grid item>{params.data.personal_info_used.city}</Grid>
              <Grid item>{params.data.personal_info_used.post_code}</Grid>
            </Grid>
            <Grid container flexDirection="column">
              <Grid container width="space-between" marginBottom="1rem">
                <Grid container flexDirection="column" width="50%">
                  <Grid item sx={headingSize}>
                    Payment Method
                  </Grid>
                  <Grid item>Paypal</Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  width="50%"
                  textAlign="end"
                >
                  <Grid item sx={headingSize}>
                    Delivery Type
                  </Grid>
                  <Grid item>
                    {params.data.personal_info_used.delivery_type}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container flexDirection="column">
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Picture
                    </Grid>
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Items
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Quantity
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Price
                    </Grid>
                  </Grid>
                  {params.data.order.map((productOrdered) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        textAlign="end"
                        gap="1rem"
                      >
                        <img
                          src={productOrdered.product.image_url}
                          loading="lazy"
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "10px",
                          }}
                          onClick={() => {
                            setStorePic(productOrdered.product.image_url);
                            setOpenPic(true);
                          }}
                        ></img>
                        <Grid item flex="1" textAlign="center">
                          Handmade {productOrdered.product.name}
                        </Grid>
                        <Grid item flex="1">
                          {productOrdered.quantity}
                        </Grid>
                        <Grid item flex="1">
                          £
                          {(
                            productOrdered.quantity *
                            productOrdered.product.price
                          ).toFixed(2)}
                        </Grid>
                      </Grid>
                    );
                  })}
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start"></Grid>
                    <Grid item flex="1">
                      Total Amount:
                    </Grid>
                    <Grid item flex="1">
                      £{total_order_amount}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    textAlign="Center"
                    marginTop="2rem"
                    sx={headingSize}
                  >
                    Delivery Instructions:
                  </Grid>
                  <Grid container justifyContent="center">
                    {params.data.delivery_instructions}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openPic}
        onClose={() => {
          setOpenPic(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "80vh",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={storePic}
            alt="product picture"
            style={{
              height: "90%",
              maxWidth: "100%",
              objectFit: "fill",
              background: "no-repeat center center/cover",
              borderRadius: "20px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

function ProductDetailRender(props) {
  // add buttons to allow to edit???
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        View Items
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "90%",
            maxWidth: "90%",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            lineHeight: "2rem",
            padding: "1rem",
            height: "80vh",
            width: "80vw",
          }}
        >
          <Grid container justifyContent="center">
            <Grid
              container
              item
              flexDirection="column"
              alignItems="center"
              xs={6}
              gap="8px"
            >
              <Grid item fontSize="20px">
                Catagory:
              </Grid>
              <Grid item>{props.data.catagory}</Grid>
              <Grid item fontSize="20px">
                Name:
              </Grid>
              <Grid item>Handmade {props.data.name}</Grid>
              <Grid item fontSize="20px">
                Long Description
              </Grid>
              <Grid item textAlign="start">
                {props.data.description_long}
              </Grid>
              <Grid item fontSize="20px">
                Short Description ( bullet points )
              </Grid>
              <Grid item textAlign="center">
                {props.data.description_short.split("#").map((e) => {
                  return <Grid item>• {e}</Grid>;
                })}
              </Grid>
            </Grid>
            <Grid container item flexDirection="column" alignItems="center" xs>
              <Grid item fontSize="20px">
                Picture used
              </Grid>
              <Grid item>
                <img
                  style={{
                    height: "500px",
                    width: "500px",
                    borderRadius: "2rem",
                  }}
                  src={props.data.image_url}
                  alt={props.data.name}
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
function ProductEditRender(props) {
  // stepper, modal??
  return (
    <>
      <div>Product Edit</div>
    </>
  );
}
function ProductDeleteRender(props) {
  // red button with the "Are you sure? pop up final warning"
  return (
    <>
      <Button
        variant="contained"
        style={{
          background: "#e03131",
          color: "#fff",
        }}
      >
        Product Delete
      </Button>
    </>
  );
}

function AddProductForm() {
  // inspiration
  // https://toolset.com/wp-content/uploads/2020/09/add-product-front-end-1.png

  const [activeStep, setActiveStep] = useState(0);
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

  /*
  {
  "name": "string",
  "image_url": "string",
  "price": "46.33",
  "description_short": "string",
  "description_long": "string",
  "catagory": "string"
}
  */
  function UploadImageToFireBase() {
    const x = Math.random();
    let storageRef = ref(
      storage,
      `gs://shop-app-project-366818.appspot.com/images/product/test-main-${x}`
    );
    uploadBytes(storageRef, storeImage).then((data) => {
      console.log(data);
      console.log("I attempt to upload image");
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
          {activeStep == 0 && (
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
                  <Grid container flexDirection="column">
                    <Grid item> Test Image Upload </Grid>
                    <Button
                      variant="contained"
                      onClick={() => {
                        UploadImageToFireBase();
                      }}
                    >
                      Test
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <img
                    src={imagePreview}
                    alt="Product Image"
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
          {activeStep == 1 && (
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
                      if (snippet == "") {
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
          {activeStep == 2 && (
            <>
              <Grid container flexDirection="column">
                <Grid item>Name</Grid>
                <Grid item color="orange">
                  {productInfo.name == "" ? "Empty" : productInfo.name}
                </Grid>
                <Grid item>Price</Grid>
                <Grid item color="orange">
                  {productInfo.price == "" ? "Empty" : productInfo.price}
                </Grid>
                <Grid item>Catagory:</Grid>
                <Grid item color="orange">
                  {productInfo.catagory == "" ? "Empty" : productInfo.catagory}
                </Grid>
                <Grid item>Image</Grid>
                <Grid item color="orange">
                  {productInfo.image_url == ""
                    ? "Empty"
                    : productInfo.image_url}
                </Grid>
                <Grid item>Description Long</Grid>
                <Grid item color="orange">
                  {productInfo.description_long == ""
                    ? "Empty"
                    : productInfo.description_long}
                </Grid>
                <Grid item>Description Short</Grid>
                <Grid item color="orange">
                  {productInfo.description_short == ""
                    ? "Empty"
                    : productInfo.description_short}
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained">Submit</Button>
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

function VerticalTabs(props) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "cart_item_id", headerName: "Cart item id" },
    { field: "product" },
    { field: "quantity" },
    { field: "total price" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // it is here where I do the logic for ag grid react.
    if (newValue == 1) {
      getProducts(setIsLoading).then((productsData) => {
        setColumnDefs([
          { field: "id", headerName: "Product Id" },
          { field: "Details", cellRenderer: ProductDetailRender },
          { field: "Edit", cellRenderer: ProductEditRender },
          { field: "Delete", cellRenderer: ProductDeleteRender },
        ]);
        setRowData(productsData);
      });
    } else if (newValue == 3) {
      getOrders(setIsLoading).then((orderData) => {
        setRowData(orderData);
        setColumnDefs([
          { field: "id", headerName: "Order id" },
          { field: "Items ordered", cellRenderer: ItemsOrderedRender },
          { field: "Urgency level", cellRenderer: UrgencyLevelRender },
          { field: "delivery_status", headerName: "Delivery Status" },
          {
            field: "Dispatched?",
            cellRenderer: DispatchedRender,
            cellRendererParams: {
              setRowData: setRowData,
              setIsLoading: setIsLoading,
              rowData: orderData,
            },
          },
        ]);
      });
    }
  };

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    flex: 1,
  }));

  const gridRef = useRef();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        height: "80vh",
        width: "80vw",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        textColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderColor: "divider",
          height: "80vh",
          width: "12%",
        }}
      >
        <Tab
          label="DashBoard"
          icon={<i className="fa-solid fa-chart-line"></i>}
          iconPosition="end"
        />
        <Tab
          label="Products"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-sharp fa-solid fa-gem"></i>}
          iconPosition="end"
        />
        <Tab
          label="Add Product"
          icon={<i className="fa-solid fa-basket-shopping"></i>}
          iconPosition="end"
        />
        <Tab
          label="Orders"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-sharp fa-solid fa-truck"></i>}
          iconPosition="end"
        />
        <Tab
          label="Refunds sent"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-solid fa-money-bill-wave"></i>}
          iconPosition="end"
        />
        <Tab
          label="Logout"
          onClick={() => {
            props.logOut();
            console.log("hello");
          }}
          icon={<i className="fa-solid fa-right-from-bracket"></i>}
          iconPosition="end"
        />
      </Tabs>
      {value == 0 && (
        <Box>
          <Tabs
            value={value}
            textColor="secondary"
            aria-label="Vertical tabs example"
            sx={{
              borderColor: "divider",
              height: "20px",
            }}
          >
            <Tab label="Sales per month" />
            <Tab label="Most popular" />
          </Tabs>
        </Box>
      )}
      {value == 1 && (
        <div className="ag-theme-material" style={{ flex: 1, height: "100%" }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              animateRows={true}
              rowSelection="multiple"
              defaultColDef={defaultColDef}
            />
          )}
        </div>
      )}
      {value == 2 && <AddProductForm />}
      {value == 3 && (
        <div className="ag-theme-material" style={{ flex: 1, height: "100%" }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              animateRows={true}
              rowSelection="multiple"
              defaultColDef={defaultColDef}
            />
          )}
        </div>
      )}
    </Box>
  );
}

function NewAdminAccount(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  function logOut() {
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_status");
    navigate("/account/login/", { replace: true });
    dispatch(cartActions.replaceCart([]));
  }

  return (
    <>
      {isLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress size="25rem" sx={{ margin: "auto" }} />
        </Grid>
      ) : (
        <Box height="100vh">
          <Container maxWidth="lg">
            <Grid
              padding="2rem 0"
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item justifyContent="center">
                Welcome back, {localStorage.getItem("username")}
              </Grid>
              <VerticalTabs logOut={logOut} />
              <Grid
                item
                container
                justifyContent="space-evenly"
                height={0.2}
                width={0.5}
              ></Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}

export default NewAdminAccount;
