import { makeStyles, Button, TextField, Modal, Backdrop, Fade} from '@material-ui/core'
import { Done, Close } from '@material-ui/icons'
import { useForm } from 'react-hook-form'

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
  modalTitle: {
    textAlign: 'center'
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
  },
  input: {
    color: theme.palette.text.secondary,
    width: 800,
  },
  fileInput: {
    padding: '15px',
    marginLeft: '10px'
  },
  formInputs: {
    padding: '20px 0'
  }
}))

export default function FormModal(props) {
  const { openFormModal, closeFormModal, open, industry, onSubmit } = props
  const styles = useStyles();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: industry ? industry.title : "aasdasdasd",
      image: industry ? industry.image.files[0] : null
    }
  })

  const handleOpen = () => {
    openFormModal();
  };

  const handleClose = () => {
    closeFormModal();
  };


  const submitHandler = handleSubmit(data => {
    onSubmit(data)
    closeFormModal();
  })

  return (
    <div>
      <button type="button" onClick={handleOpen} style={{ display: 'none' }}>
        Open form Modal dialog
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
            <h2 className={styles.modalTitle}>{ industry ? "Edit item" : "Create new item" }</h2>
            <form className={styles.root} noValidate autoComplete="off" onSubmit={submitHandler}>
              <div className={styles.formInputs}>
                <TextField 
                  id="title" 
                  name="title" 
                  label="Title" 
                  variant="outlined" 
                  color="primary"
                  inputProps={{ className: styles.input }}
                  {...register('title')}
                />
                <Button
                  variant="contained"
                  component="label"
                  className={styles.fileInput}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                    {...register('image')}
                  />
                </Button>
              </div>
              <div className={styles.actions}>
                <Button 
                  className={styles.confirmBtn} 
                  variant="contained" color="primary" 
                  type="submit"
                ><Done />Confirm
                  
                    
                </Button>
                <Button 
                  className={styles.cancelBtn} 
                  variant="contained" 
                  color="secondary" 
                  onClick={handleClose}
                ><Close />Cancel
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
