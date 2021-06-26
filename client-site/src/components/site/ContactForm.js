import { Button, Grid, TextField, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SendIcon from '@material-ui/icons/Send'
import classes from './ContactForm.module.css'
import { useForm } from 'react-hook-form'
import { createMessage } from '../../api/api'

const useStyles = makeStyles(theme => ({
  textField: {
    color: '#fff',
    border: '1px solid #fff',
    fontWeight: 900
  },
  Input: {
    color: '#fff',
    '&::after': {
      border: '2px solif #fff'
    }
  },
  input: {
    color: '#fff',
  },
  label: {
    color: '#fff'
  },
  root: {
    background: theme.palette.grey[100]
  }
}))

export default function ContactForm() {

  const styles = useStyles()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const submitHandler = async data => {
    console.log(data)
    try {
      await createMessage(data)
      console.log('Message was sent.')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.Main} id="contact_us">
      <Typography className={classes.SectionTitle} variant="h2" component="h2">Contact us</Typography>
      <Container>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              id="name" 
              label="Name" 
              fullWidth 
              autoComplete="off" 
              focused
              color="primary"
              InputProps={{ className: styles.Input }}
              inputProps={{ className: styles.input }}
              {...register('senderName')}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="email" 
              label="Email" 
              fullWidth 
              focused
              color="primary"
              InputProps={{ className: styles.Input }}
              inputProps={{ className: styles.input }}
              {...register('senderEmail')}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              multiline
              fullWidth
              rows={8}
              color="primary"
              InputProps={{ className: styles.Input }}
              inputProps={{ className: styles.input }}
              focused
              {...register('messageBody')}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.Actions}>
              <Button className={classes.Btn} type="submit">
                <span className={classes.BtnLabel}>Send</span>
                <SendIcon fontSize={'small'} />
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
      </Container>
    </div>
  )
}
