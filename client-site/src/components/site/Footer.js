import { makeStyles, Typography, Grid, Container } from "@material-ui/core"
import {Link} from 'react-scroll'
import footerData from '../../mocData/footerData'

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#212121',
    color: '#fff',
    padding: '2vh 0'
  },
  columnTitle: {
    paddingBottom: '1vh'
  },
  columnTitleSpan: { 
    color: '#009688' 
  },
  copyright: { 
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  coperightInfo: {
    paddingBottom: '1vh'
  },
  linksList: {
    display: 'block',
    listStyleType: 'none',
    textAlign: 'left',
    marginLeft: '40%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: '0'
    }
  },
  linkItem: {
    color: '#009688',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  },
  contactIcon: {
    height: '16px',
    padding: '0 5px 0 0',
    marginLeft: '-7px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  footerGrid: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    }
  }
  
}))

export default function Footer() {
  const styles = useStyles()
  
  const current_year = new Date().getFullYear()

  const contactPoints = footerData.messengers.map(item => (
    <li key={item.title}>
      <img src={item.imgUrl} alt={item.title} className={styles.contactIcon} />  
      <Link className={styles.linkItem}>{item.title}</Link>
    </li>
  ))

  return (

    <div className={styles.main}>
      <Container>

        <Grid container spacing={3} className={styles.footerGrid}>
          <Grid item xs={12} lg={5} className={styles.copyright}>
            <Typography component="h5" className={styles.columnTitle} variant="h5">Bonfire<span className={ styles.columnTitleSpan}>Apps</span></Typography>
            <Typography component="p" className={styles.coperightInfo}>Make future today. Let the bonfire outflame.</Typography>
            <Typography component="p" className={styles.coperightInfo}>&copy; <span>{current_year}</span>, BonfireApps. All rights reserved.</Typography>
          </Grid>

            <Grid item xs={12} lg={3}>
              <Typography className={styles.columnTitle} variant="h5" component="h2">Links</Typography>
              <ul className={styles.linksList}>
                <li>
                  <Link 
                  className={styles.linkItem}
                  href="#technologies"
                  to={"technologies"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={750}
                  color="inherit"
                  >
                  Technologies
                  </Link>
                </li>
                <li>
                  <Link 
                    className={styles.linkItem}
                    href="#industries"
                    to={"industries"}
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={1000}
                    color="inherit"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link 
                    className={styles.linkItem}
                    href="#contact_us"
                    to={"contact_us"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={750}
                    color="inherit"
                  >Contact us
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Typography className={styles.columnTitle} variant="h5">Call us</Typography>
              <ul className={styles.linksList}>
                {contactPoints}
              </ul>
            </Grid>

        </Grid>

      </Container>
    </div>
  )
}
