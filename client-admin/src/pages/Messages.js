import { useState } from 'react'
import { Grid, makeStyles, Typography } from "@material-ui/core"
import PageTitle from "../components/UI/PageTitle"
import MessageItem from '../components/messages/MessageItem'
import MessagesTable from '../components/messages/MessagesTable'
import { getMessage } from '../api/api'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  waitTitle: {
    textAlign: 'left',
    fontWeight: 900,
    margin: 0,
    paddingTop: '5px'
  }
}))

export default function Messages() {
  const styles = useStyles()

  const [message, setMessage] = useState(null)

  const setMessageHandler = async id => {
    const fetchedMessage = await getMessage(id)
    setMessage(fetchedMessage)
  }

  // const message_checked = data[(data.length) / 2]

  // useEffect(() => {
  //   setMessage(message_checked)
  // }, [message_checked])

  console.log(message)

  return (
    <>
      <PageTitle title="Income messages" />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <MessagesTable setMessage={setMessageHandler} />
        </Grid>
        <Grid item xs={8}>
          { message 
          ?
          <MessageItem 
            name={message && message.senderName} 
            email={message && message.senderEmail} 
            date={message && moment.utc(message.createdAt).format('MMM DD, YYYY')} 
            time={message && moment.utc(message.createdAt).local().format('LT')} 
            messageBody={message && message.messageBody} 
          />
          :
          <Typography paragraph className={styles.waitTitle}>Choose the message by click.</Typography>
          }
        </Grid>
      </Grid>
    </>
  )
}