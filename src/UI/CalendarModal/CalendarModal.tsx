import { Box, Fade, Backdrop, Button, Modal } from "@mui/material";
import React, { FC, useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import CalendarFilter from "./CalendarFilter/CalendarFilter";
import styles from "./CalendarModal.module.css";

const CalendarModal: FC = ({ open, setOpen }) => {
  const [selectedDate, setSelectedDay] = useState(new Date());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
    width: "1200px",
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <CalendarFilter />
              <div className={styles.calendarWithPhotos}>
                <div className={styles.calendar}>
                  <Calendar
                    selectedDate={selectedDate}
                    selectDate={(date) => setSelectedDay(date)}
                  />
                </div>
                <div className={styles.calendar_events}>
                  <CalendarEvents />
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CalendarModal;
