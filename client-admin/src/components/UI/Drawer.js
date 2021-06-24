import { useState } from 'react'
import { 
  Drawer as MUIDrawer, 
  ListItemIcon, 
  ListItemText, 
  ListItem, 
  List, 
  Typography, 
  makeStyles, 
  Divider 
} from '@material-ui/core'

import { withRouter, useHistory } from 'react-router-dom'
import { Mail, ExitToApp, Build, BusinessCenter } from '@material-ui/icons'
import logo from '../../img/logo.png'

const useStyles = makeStyles(theme =>({
  appTitle: {
    textAlign: 'left',
    fontSize: '24pt',
    fontWeight: 500
  },
  listItemLogo: {
    width: 30,
    margin: 0
  },
  list: {
    background: theme.palette.primary.dark,
    color: "#fff",
    width: 300,
    height: "100vh"
  },
  listItem: {
    '&:hover': {
      background: 'rgba(0,0,0, 0.2)'
    }
  },
  listItenActive: {
    background: 'rgba(0,0,0, 0.3)!important',
  },
  listItemIcon: {
    color: "#fff",
    margin: 0
  },
  listItemText: {
    padding: 0,
    marginLeft: "auto",
    color: '#fff',
    textAlign: "left!important"
  },
  divider: {
    background: theme.palette.primary.light,
  }
}))



const Drawer = () => {
  const history = useHistory()
  const styles = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index)
    history.push(path)
  }

  // const itemsList = [
  //   {
  //     text: "Technologies",
  //     icon: <Build />,
  //     index: 0,
  //     path: "/"
  //   },
  //   {
  //     text: "Industries",
  //     icon: <BusinessCenter />,
  //     index: 1,
  //     path: "/industries"
  //   },
  //   {
  //     text: "Messages",
  //     icon: <Mail />,
  //     index: 3,
  //     path: "/messages"
  //   }
  // ];

  return (
    <MUIDrawer variant="permanent">
      <List className={styles.list}>
        <ListItem>
          <ListItemIcon><img src={logo} alt="logo" className={styles.listItemLogo} /></ListItemIcon>
          <Typography variant="h5" className={styles.appTitle}>Admin panel</Typography>
        </ListItem>
        {/* {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem 
              button 
              key={text} 
              className={styles.listItem}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index, path)}>
              {icon && (<ListItemIcon className={styles.listItemIcon}>{icon}</ListItemIcon>)}
              <ListItemText primary={text} className={styles.listItemText} />
            </ListItem>
            
          );
        })} */}
        <ListItem 
          button 
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, '/')} 
          className={selectedIndex === 0 ? [styles.listItem, styles.listItenActive].join(' ') : styles.listItem}>
          
          <ListItemIcon><Build className={styles.listItemIcon} /></ListItemIcon>
          <ListItemText primary="Technologies" className={styles.listItemText} />
        </ListItem>

        <ListItem 
          button 
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1, '/industries')} 
          className={selectedIndex === 1 ? [styles.listItem, styles.listItenActive].join(' ') : styles.listItem}>
          <ListItemIcon><BusinessCenter className={styles.listItemIcon} /></ListItemIcon>
          <ListItemText primary="Industries" className={styles.listItemText} />
        </ListItem>

        <ListItem 
          button 
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2, '/messages')} 
          className={selectedIndex === 2 ? [styles.listItem, styles.listItenActive].join(' ') : styles.listItem}>
          <ListItemIcon><Mail className={styles.listItemIcon} /></ListItemIcon>
          <ListItemText primary="Messages" className={styles.listItemText} />
        </ListItem>

        <Divider variant="middle" className={styles.divider} />

        <ListItem 
          button 
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3, '/logout')} 
          className={selectedIndex === 3 ? [styles.listItem, styles.listItenActive].join(' ') : styles.listItem}>
          <ListItemIcon><ExitToApp className={styles.listItemIcon} /></ListItemIcon>
          <ListItemText primary="Logout" className={styles.listItemText} />
        </ListItem>
      
      </List>
    </MUIDrawer>
  )
}

export default withRouter(Drawer)