import { Container, Typography } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import classes from './HelloScreen.module.css'
import mainLogo from '../../img/site/index1_square.png'
import { Link } from 'react-scroll'

export default function HelloScreen() {
  return (
    <div className={classes.Main} id="hello_screen">
      <div className={classes.HelloBox}>
        <Container>
          <img src={mainLogo} alt="logo" className={classes.LogoImage} />
          <Typography component="h2" variant="h2" color="initial">Bonfire<span style={{ color: '#009688' }}>Apps</span></Typography>
          <Typography component="h2" variant="h5">Flaming passion in creating the future</Typography>
          <Typography component="h2" variant="h5">Fast, intelligent, attractive apps for you</Typography>
          <Link
            href="#technologies"
            to="technologies"
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
            className={classes.navLink} 
            color="inherit"
          ><ArrowDownwardIcon className={classes.ArrowDown} />
          </Link>
        </Container>
      </div>
    </div>
  )
}
