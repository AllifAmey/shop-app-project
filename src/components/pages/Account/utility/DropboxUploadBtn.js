import React from "react";
import DropboxChooser from "react-dropbox-chooser";
import SvgIcon from "@mui/material/SvgIcon";

function DropboxUploadBtn(props) {
  // grabs the file from dropbox updates state on main create productpage

  const APP_KEY = process.env.REACT_APP_DROPBOX_API_KEY;

  function grabDataSimple(url) {
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

export default DropboxUploadBtn;
