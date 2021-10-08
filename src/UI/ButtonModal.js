import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80%",
  },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.9rem",
    fontWeight: "600",
  },
  subheading: {
    fontFamily: "Montserrat, sans",
    color: "dark-grey",
    fontSize: "1.3rem",
    fontWeight: "300",
  },
  period: {
    fontWeight: "400",
  },
  description: {
    paddingTop: "10px",
  },
}));

const ButtonModal = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.buttonDiv}>
      <IconButton onClick={openModalHandler}>
        <MoreHorizIcon />
      </IconButton>
      <Modal
        className={classes.modal}
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Typography className={classes.heading} variant="h5">
              {props.heading}
            </Typography>
            <Typography className={classes.subheading} variant="subtitle1">
              {props.subheading}
            </Typography>
            <Typography className={classes.period} variant="subtitle2">
              {props.period}
            </Typography>
            <div className={classes.description}>{props.children}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ButtonModal;
