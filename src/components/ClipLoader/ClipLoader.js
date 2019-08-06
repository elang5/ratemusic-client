import React from "react";
import { ClipLoader } from "react-spinners";
import "./ClipLoader.css";

export default function Loader(props) {
  return (
    <div className="loader-container">
      <ClipLoader
        className="loader"
        sizeUnit={"px"}
        size={150}
        color={"rgba(252, 61, 57, 0.73)"}
        loading={props.loading}
      />
    </div>
  );
}
