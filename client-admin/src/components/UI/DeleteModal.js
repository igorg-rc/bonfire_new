import { makeStyles, Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Done, Close } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
  },
  actions: {
    textAlign: 'center',
    paddingTop: '2vh',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start'
  },
  cancelBtn: {
    width: 120,
    marginLeft: 'auto'
  },
  confirmBtn: {
    width: 120,
    marginRight: 'auto'
  }
}))

export default function DeleteModal({ openDeleteModal, closeDeleteModal, open, handleDelete }) {
  const styles = useStyles();

  const handleOpen = () => {
    openDeleteModal();
  };

  const handleClose = () => {
    closeDeleteModal();
  };

  return (
    <div>
      <button style={{ display: 'none' }} type="button" onClick={handleOpen}>
        Open delete dialog
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id="transition-modal-title">Delete item. Are you sure?</h2>
            <div className={styles.actions}>
              <Button 
                className={styles.confirmBtn} 
                variant="contained" color="primary" 
                onClick={handleDelete}>
                <Done />
                  Confirm
                </Button>
              <Button 
                className={styles.cancelBtn} 
                variant="contained" 
                color="secondary" 
                onClick={handleClose}>
                <Close />
                  Cancel
                </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
