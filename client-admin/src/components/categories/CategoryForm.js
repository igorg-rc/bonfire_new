import { makeStyles, Button, TextField, Grid } from '@material-ui/core'
import { Done, Close } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

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
    color: theme.palette.text.secondary,
    width: '725px',
  },
  formInputs: {
  }
}))

export default function CategoryForm({ item, onSubmit }) {
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const styles = useStyles()

  const submitHandler = data => {
    onSubmit(data)
    // history.push('/industries')
  }

  return (
    <div className={styles.formHolder}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className={styles.formInputs}>
              <TextField 
                label="Title" 
                variant="outlined" 
                color="primary"
                inputProps={{ className: styles.input }}
                name="title"
                id="title"
                defaultValue={item ? item.title: ""}
                {...register('title')}
              />
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
                onClick={() => history.push('/technologies')}
              ><Close />Cancel
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>      
    </div>
  )
}