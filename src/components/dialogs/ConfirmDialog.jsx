import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export function ConfirmDialog({
  buttonName,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  const [open, setOpen] = useState(false);

  const clickConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  const clickCancel = () => {
    setOpen(false);
    onCancel();
  };

  const openDialog = () => setOpen(true);

  return (
    <div className="justify-center">
      <Button onClick={openDialog} variant="text" color="error">
        {buttonName}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent className="text-black " divider>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={clickCancel}>
            <span>Cancel</span>
          </Button>
          <Button color="success" onClick={clickConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
