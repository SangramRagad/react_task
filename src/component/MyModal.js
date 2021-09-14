import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height: 400,
    top: 50,
    left: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  myButton: {
    cursor: "pointer",
  },
}));

function MyModal() {
  const params = useParams();
  console.log(params);

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  let history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push(`/${params.page}`);
  };

  const body = (
    <div className={classes.paper}>
      <button className={classes.myButton} onClick={handleClose}>
        <CloseIcon fontSize="large" />
      </button>
      <h2>Test the modal id : {params.id}</h2>
      <p>This is modal for testing the app</p>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

export default MyModal;
