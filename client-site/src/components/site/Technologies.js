import  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Grid, Typography } from '@material-ui/core/';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs'
import { getTechnologies } from '../../api/api';

const useStyles = makeStyles((theme) => ({
  main: {
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
    backgroundColor: 'transparent',
  },
  tabs: {

  },
  tabList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5vh 0'
  },
  tab: {
    color: '#009688',
    width: '100%',
    padding: '10px 0',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255, 0.03)',
      fontSize: 20,
      cursor: 'pointer'
    }
  },
  tabActive: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    fontSize: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: '#fff',
    backgroundColor: "transparent",
    border: '1px solid #fff'
  },
  tabLabel: {
    fontSize: '1.4rem',
    fontWeight: '900',
    margin: '0 5px',
    
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  techImg: {
    height: '72px'
  }
}));

export default function Technologies() {
  const styles = useStyles();
  const [categories, setCategories] = useState([])
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getTechnologies()
      setCategories(fetchedCategories)
    }
    fetchCategories()
  }, [])

  console.log(tabIndex)

  return (
    <div className={styles.main} id="technologies">
      <Container>
        <Typography component="h2" className={styles.sectionTitle} variant="h2" component="h2">Technologies</Typography>
        <Tabs className={styles.tabs} selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className={styles.tabList}>
            { categories && categories.map((item, index) => (
              <Tab key={item.title} className={tabIndex === index ? [styles.tab, styles.tabActive].join(' ') : styles.tab}>
                <span className={styles.tabLabel}>{item.title}</span>
              </Tab>
            ))}
          </TabList>

          { categories && categories.map(item => (
            <TabPanel key={item._id}>
              <Grid container spacing={4}>
                { item.technologies.map(technology => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={technology.imgUrl}>
                    <Typography variant="h6" component="h2">{technology.title}</Typography>
                    <img src={technology.imgUrl} alt={technology.title} className={styles.techImg} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}