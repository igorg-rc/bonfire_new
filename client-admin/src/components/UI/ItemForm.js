import { makeStyles, Button, TextField, Grid } from '@material-ui/core'
import { Done, Close } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  formHolder: {
    paddingTop: '30px',
  },
  actions: {
    width: 755,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 120,
  },
  input: {
    width: '600px',
  },
  label:{
    color: theme.palette.text.primary
  },
  fileInput: {
    padding: '15px',
    marginLeft: '10px'
  },
  formInputs: {
  }
}))

export default function ItemForm({ item, onSubmit }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const history = useHistory()
  const styles = useStyles()

  const submitHandler = data => {
    onSubmit(data)
  }

  return (
    <div className={styles.formHolder}>
      <form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data">
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className={styles.formInputs}>
              <TextField 
                label="Title" 
                variant="outlined" 
                color="primary"
                inputProps={{ className: styles.input }}
                InputLabelProps={{ className: styles.label }}
                name="title"
                id="title"
                defaultValue={item ? item.title : ""}
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
                  name="image"
                  id="image"
                  hidden
                  defaultValue={item ? item.image : null}
                  {...register('image')}
                />
              </Button>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className={styles.actions}>
              <Button 
                className={styles.btn} 
                variant="contained" color="primary" 
                type="submit"
              ><Done />Submit
                
              </Button>
              <Button 
                className={styles.btn} 
                variant="contained" 
                color="secondary" 
                onClick={() => history.push('/industries')}
              ><Close />Cancel
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>      
    </div>
  )
}