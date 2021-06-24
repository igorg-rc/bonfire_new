import { Typography, Grid, Container } from "@material-ui/core"
import classes from './Industries.module.css'
import industries from "../../mocData/industriesData"

const industriesList = industries.map(industry => (
  <Grid item xs={12} sm={6} md={4} key={industry.title}>
    <div className="col s12 m6 l4">
      <div className={classes.Holder}>
        <img src={industry.imgUrl} alt={industry.title} className={classes.Img} />
        <div>
          <h5 className={classes.LayerText}>{industry.title}</h5>
        </div>
        <div className={classes.Overlay}>
          <h5 className={classes.OverlayText}>{industry.title}</h5>
        </div>
      </div>
    </div>
  </Grid>
))

export default function Industries() {

  return (
    <div className={classes.Main} id="industries">
      <Container>
      <Typography variant="h2" component="h2" className={classes.SectionTitle}>Industries</Typography>
      <Grid container spacing={1}>
        { industriesList }
      </Grid>
      </Container>
    </div>
  )
}
