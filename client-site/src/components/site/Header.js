import { AppBar, Toolbar, Container, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { MenuRounded } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '65px',
    backgroundColor: '#00796b',
    position: 'fixed',
    margin: 0,
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
  toolbar: {
    margin: 0,
    padding: 0
  },
  toolbarMobile: {
    background: '#000'
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
  listItemActive: {
    fontWeight: 800
  },

  navLinkMobile: {
    color: "#212121",
    flexGrow: 0.05,
    fontSize: 15
  },
  brandLinkMobile: {
    textAlign: 'center'
  },

  blockLinks: {
    textAlign: 'right',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirecion: 'column'
    }
  },
  menuIcon: {
    color: "#e0e0e0",
    flexGrow: 0.05,
    '&:hover': {
      color: '#fff'
    }
  }
 
}))

export default function Header() {
  const classes = useStyles()
  const theme = useTheme()
  const [colorChanged, setColorChanged] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    setAnchorEl(null);
  };

  const handleLinkClick = (event, index) => {
    setSelectedIndex(index)
  };

  const menuItems = [
    {
      index: 1,
      menuTitle: "Technologies",
      pageURL: "technologies"
    },
    {
      index: 2,
      menuTitle: "Industries",
      pageURL: "industries"
    },
    {
      index: 3,
      menuTitle: "Contact us",
      pageURL: "contact_us"
    }
  ];

  const changeNavbarBg = () => {
    if (window.scrollY <= 100) {
      setColorChanged(false) 
    } else {
      setColorChanged(true)
    }
  }

  
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBg);

  }, [])

  return (
      <div className={classes.root}>
        
        <AppBar elevation={0} className={colorChanged ? classes.appBar : classes.appBarChanged}>
          { !isMobile ? (
          <Container>
            <Toolbar className={classes.toolbar}>
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
            </Toolbar>
          </Container> 
          ) : ( 
            <Container>
            <Toolbar className={classes.toolbar}>
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

              <IconButton onClick={handleMenu} style={{ marginLeft: 'auto' }}>
                <MenuRounded className={classes.menuIcon} />
              </IconButton> 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL, index } = menuItem;
                  return (
                    <div onClick={() => handleMenuClick(pageURL)}>
                      <MenuItem key={menuTitle} className={classes.menuItem} >
                        <Link 
                          className={
                            [classes.navLinkMobile, classes.brandLinkMobile].join(' ')
                          } 
                          color="inherit"
                          href={`#${pageURL}`}
                          to={pageURL}
                          spy={true}
                          smooth={true}
                          duration={750}
                          color="inherit"
                          selected={selectedIndex === index}
                          style={{ textAlign: 'center!important'}}
                          onClick={() => handleLinkClick('click', index)}
                        >
                          {menuTitle}
                        </Link>
                      </MenuItem>
                    </div>
                  );
                })}
              </Menu>
            </Toolbar>
            </Container>
          )}
        </AppBar>
      </div>
  )
}
