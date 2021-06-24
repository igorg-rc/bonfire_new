import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '65px',
    backgroundColor: '#00796b',
    position: 'fixed',
    margin: 0
  },
  appBarChanged: {
    height: '60px',
    backgroundColor: 'transparent',
    position: 'fixed',
    transition: 'backgroundColor 1000ms linear'
  },
  root: {
    position: 'absolute',
    zIndex: '999'
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: "#e0e0e0",
    flexGrow: 0.05,
    fontSize: 15,
    '&:hover': {
      color: '#fff'
    }
  },
  brandLink: {
    textAlign: 'left'
  },
  blockLinks: {
    textAlign: 'right',
    display: 'block',
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none'
    // },
  },
  menuIcon: {
    color: "#e0e0e0",
    flexGrow: 0.05,
    // [theme.breakpoints.up('xs')]: {
    //   display: 'none'
    // },
    '&:hover': {
      color: '#fff'
    }
  }
 
}))

export default function Header() {
  const classes = useStyles()

  const [colorChanged, setColorChanged] = useState(false)
  const [backdropIsOpen, setBackdropIsOpen] = useState(false)

  const changeNavbarBg = () => {
    if (window.scrollY <= 100) {
      setColorChanged(false) 
    } else {
      setColorChanged(true)
    }
  }

  const backdrop = (
    <div style={{ 
      height: '100%', 
      width: '70%', 
      zIndex: '999', 
      background: '#000', 
      color: '#fff', 
      position: 'absolute', 
      display: backdropIsOpen ? 'block' : 'none' 
    }}>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  )
  
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBg);

  }, [])

  return (
      <div className={classes.root}>
        {/* <div id="backdrop" onClick={() => setBackdropIsOpen(!backdropIsOpen)}>{ backdrop }</div> */}
        <AppBar elevation={0} className={colorChanged ? classes.appBar : classes.appBarChanged}>
          <Container>
            <Toolbar style={{ margin: 0, padding: 0}}>
              <Link 
                className={[classes.navLink, classes.brandLink].join(' ')} 
                color="inherit"
                href="#hello_screen"
                to="hello_screen"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                color="inherit"
                style={{ textAlign: 'left!important'}}
              >
                BonfireApps
              </Link>


              <Typography variant="h6" component="h2" className={classes.title}></Typography>
              <Link 
                href="#technologies"
                to="technologies"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                className={[classes.navLink, classes.blockLinks].join(' ')} 
                color="inherit"
                >
                Technologies
              </Link>

              <Link 
                href="#industries"
                to="industries"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                className={[classes.navLink, classes.blockLinks].join(' ')} 
                color="inherit"
                >
                Industries
              </Link>

              <Link 
                href="#contact_us"
                to="contact_us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                className={[classes.navLink, classes.blockLinks].join(' ')} 
                color="inherit"
                >
                Contact us
              </Link>
              {/* <IconButton onClick={() => setBackdropIsOpen(!backdropIsOpen)}>
                <MenuRounded className={classes.menuIcon} />
              </IconButton> */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
  )
}
