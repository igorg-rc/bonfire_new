import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#009688 !important'
  },
  inner: {
    padding: '20vh 0'
  },
  sectionTitle: {
    color: '#fff',
    padding: '3vh 0'
  }
}))

export default function Map() {
  const styles = useStyles()

  return (
    <div className={styles.main}>
        <div className={styles.inner}>
          <Typography variant="h2" component="h2" className={styles.sectionTitle}>Where are we from</Typography>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5263929.141591379!2d27.566887786042674!3d49.6947690877247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc60cd2a22a54d%3A0x2b82afc3e2120d51!2sMayakovs&#39;koho%20Ave%2C%2011a%2C%20Zaporizhzhia%2C%20Zaporiz&#39;ka%20oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1612962350652!5m2!1sen!2sua" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            title="myMap"
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
          >
          </iframe>
        </div>
    </div>
  )
}
