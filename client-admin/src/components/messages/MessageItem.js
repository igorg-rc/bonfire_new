import { makeStyles, Typography } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  main: {
    height: '50vh',
    paddingTop: '5px'
  },
  senderName: {
    textAlign: 'left',
    fontWeight: 900,
    margin: 0,
    padding: 0
  },
  senderEmail: {
    margin: '0 5px',
    fontWeight: 500,
    fontSize: 13,
    color: theme.palette.text.disabled
  },
  dateTime: {
    textAlign: 'left',
    fontSize: 14,
    color: theme.palette.text.disabled,
    marginTop: -5,
    padding: 0
  },
  messageBody: {
    textAlign: 'justify',
    fontSize: 14
  }
}))

export default function MessageItem(props) {
  const { name, email, date, time, messageBody} = props
  const styles = useStyles()

  return (
    <div className={styles.main}>
      <Typography paragraph className={styles.senderName}>{name}
        <span className={styles.senderEmail}>{`<${email}>`}</span>
      </Typography>
      <Typography paragraph className={styles.dateTime}>{date} {time}</Typography>
      <p className={styles.messageBody}>{messageBody}</p>
    </div>
  )
}