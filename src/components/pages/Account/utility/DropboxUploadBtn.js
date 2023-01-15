import React, { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";
import SvgIcon from "@mui/material/SvgIcon";

function DropboxUploadBtn(props) {
  // grabs the file from dropbox updates state on main create productpage
  const [imgURL, setimgURL] = useState("");

  const APP_KEY = process.env.REACT_APP_DROPBOX_API_KEY;
  function toDataURL(url) {
    return fetch(url)
      .then((response) => {
        const reader = response.body.getReader();
        console.log(response);
        console.log(`reader is ${reader}`);
        return new ReadableStream({
          start(controller) {
            return pump();
            function pump() {
              return reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      })
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then((blob) => {
        props.setStoreMainImage([URL.createObjectURL(blob)]);
        return URL.createObjectURL(blob);
      });
  }

  function grabdata(url) {
    // convinced the issue is related to the url
    fetch(url)
      .then((response) => {
        console.log(response);
        console.log(`response body is ${response.body}`);
        //console.log(`response json is ${response.json()}`);
        //console.log(`response blob is ${response.blob()}`);
        return response.blob();
      })
      .then((blob) => {
        console.log(`blob is ${blob}`);
        props.setStoreMainImage([URL.createObjectURL(blob)]);
      });
  }

  function grabDataSimple(url) {
    console.log(`url is ${url}`);

    fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        props.setMainImage([URL.createObjectURL(blob)]);
        props.setStoreMainImage([blob]);
      });
  }

  function handleDropBoxSuccess(files) {
    console.log(files[0]);
    //toDataURL(files[0].link);
    console.log(`files are ${files}`);
    grabDataSimple(files[0].link);
    //props.setMainImage([files[0].thumbnailLink]);
  }
  /*
  bytes : 207376
icon : "https://www.dropbox.com/static/images/icons64/page_white_picture.png"
id : "id:fbSdnexBP28AAAAAAAAjoA"
isDir : false
link : "https://www.dropbox.com/s/r0d9rvke7f1m1nn/2011-05-12%2015.11.20.jpg?dl=0"
linkType :  "preview"
name :  "2011-05-12 15.11.20.jpg" 
thumbnailLink :  "https://uca8c0cec28dfaa51dde7ddca1d6.previews.dropboxusercontent.com/p/thumb/ABwbytz-k2bQIIaKZMjhkWP69bKoc_k_xsvX5g0LRVOgXGOvAnC9l_djltzKf_cQQHEFQH5aB_V4Z0f0KcWgWTtp5Pf8B41BVJwnnuEaWLYuyTkyRahqYOZpKM8Ksp3-WsJGin4Red-TiMUbfxhd3xybJTnJJ17e3I-9PxvqD_1Pze4ZrM0xFfTHAL8kCGoV1ekF4TrdAYgdxzTA3DT5xPI9233bqN5BpK6L9PuExDh3-5el-J1Dw7sGhLPO6dBh98SwvIJ5lw7NhL86d2xQ7vCKF8v6tA7TldJ7ALbK8gEVV12SbTS2UjG7wgmfI_6FdR49jZgrHiSANHcytTE-zmovblXt8edLWFEoMzDweQNpnQ/p.jpeg?bounding_box=75&mode=fit"
[[Prototype]]
: 
Object

  */

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
      <img src={imgURL} alt="" />
    </>
  );
}

export default DropboxUploadBtn;
