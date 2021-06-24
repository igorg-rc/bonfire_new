import  { useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Container, Grid, Paper } from '@material-ui/core/';
import technologiesData from '../../mocData/techData'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20vh 0',
    backgroundColor: '#212121',
    color: '#fff',
    flexGrow: 1,
  },
  sectionTitle: {
    padding: '5vh 0',
    color: '#fff'
  },
  appBar: {
    backgroundColor: 'transparent'
  },
  tabs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  tab: {
    color: '#009688',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255, 0.05)'
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: '#fff',
    backgroundColor: "transparent",
    border: '1px solid #fff'
  },
  // tab: {},
  tabLabel: {
    fontSize: '1.4rem',
    fontWeight: '900',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  techImg: {
    height: '72px'
  }
}));

export default function Technologies() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="technologies">
      <Container>
      <Typography className={classes.sectionTitle} variant="h2" component="h2">Technologies</Typography>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example" 
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label={<span className={classes.tabLabel}>Frontend</span>} {...a11yProps(0)}  />
          <Tab className={classes.tab} label={<span className={classes.tabLabel}>Backend</span>} {...a11yProps(1)}  />
          <Tab className={classes.tab} label={<span className={classes.tabLabel}>Tools</span>} {...a11yProps(2)}  />
          <Tab className={classes.tab} label={<span className={classes.tabLabel}>API</span>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
        { technologiesData.frontend.map(i => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i.imgUrl}>
            <Typography variant="h6" component="h2">{i.title}</Typography>
            <img src={i.imgUrl} alt={i.title} className={classes.techImg} />
          </Grid>
          
        )) }
        </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
      <Grid container spacing={4}>
        { technologiesData.backend.map(i => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i.imgUrl}>
            <Typography variant="h6" component="h2">{i.title}</Typography>
            <img src={i.imgUrl} alt={i.title} className={classes.techImg} />
          </Grid>
          
        )) }
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Grid container spacing={4}>
        { technologiesData.tools.map(i => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i.imgUrl}>
            <Typography variant="h6"component="h2">{i.title}</Typography>
            <img src={i.imgUrl} alt={i.title} className={classes.techImg} />
          </Grid>
        )) }
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <Grid container spacing={4}>
        { technologiesData.api.map(i => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i.imgUrl}>
            <Typography variant="h6"component="h2">{i.title}</Typography>
            <img src={i.imgUrl} alt={i.title} className={classes.techImg} />
          </Grid>
        )) }
        </Grid>
      </TabPanel>
      </Container>
    </div>
  );
}