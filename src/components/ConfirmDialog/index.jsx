import React from "react";
import "./index.css";

export default function ConfirmDialog({ show, info, handleDialogClick }) {
  return (
    <div
      className="dialog-background"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <div className="dialog-wrap">
        <div className="header">
          <div className="text">{info.title}</div>
          <div className="close"></div>
        </div>
        <div className="content">
          <div className="icon">
            <i className="fa-solid fa-circle-exclamation"></i>
          </div>
          <div className="text">{info.text}</div>
        </div>
        <div className="footer">
          <div
            className="footer-item check"
            onClick={() => {
              handleDialogClick(true);
            }}
          >
            OK
          </div>
          <div
            className="footer-item cancel"
            onClick={() => {
              handleDialogClick(false);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
