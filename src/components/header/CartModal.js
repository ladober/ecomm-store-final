import React from "react";
import Modal from "@mui/material/Modal";
import { Backdrop, Box, Fade } from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  paddingX: 2,
  paddingY: 2,
};

export const CartModal = ({ open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styles}>hi</Box>
        </Fade>
      </Modal>
    </div>
  );
};
