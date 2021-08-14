import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  modal: {
    background: "white",
    margin: "2rem",
    marginTop: "100px",
    padding: "2rem",
    boxShadow: "2px 2px 2px 2px green",
    width: "20rem",
    margin: "auto"
  },
  modalText: {
    color: "green"
  }
});

export default function CoreElement() {
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState("IN");

  const [showModal, setShowModal] = useState(false);

  const styles = useStyles();
  return (
    <>
      <Button
        onClick={() => setShowModal(!showModal)}
        variant="contained"
        color="primary"
      >
        Open Modal
      </Button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <Paper className={styles.modal}>
          <Box>
            <Typography className={styles.modalText}>Masai School</Typography>
          </Box>
          <Box>
            <Button
              onClick={() => setShowModal(false)}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
          </Box>
        </Paper>
      </Modal>
      <Typography variant="h3">My APP</Typography>
      <Box m={2}>
        <Button
          // className={styles.myButton}
          startIcon={<SaveIcon />}
          variant="contained"
          color="secondary"
          size="large"
        >
          SAVE
        </Button>
      </Box>
      <Box>
        <Checkbox
          color="secondary"
          size="medium"
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
        />
        <Checkbox
          color="primary"
          size="medium"
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </Box>
      <Box>
        <TextField label="Email" variant="outlined" />
        <Box m={5}>
          <TextField
            label="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            select
          >
            {[
              { label: "India", value: "IN" },
              { label: "USA", value: "USA" }
            ].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box m={5}>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
        </Box>

        <Box m={5}>
          <TextField
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
          />
        </Box>
      </Box>
    </>
  );
}
