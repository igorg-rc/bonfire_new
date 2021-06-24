import { makeStyles, IconButton } from "@material-ui/core"
import { Create, Delete } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  pageTitle: {
    background: theme.palette.primary.dark,
    width: '100%',
    color: '#fff',
    padding: '5px 10px',
    fontSize: 30,
    display: 'flex',
    justifyContent: 'space-between'
  },
  actionBtn: {
    margin: '0 3px!important',
    padding: '0!important',
    marginRight: '35%'
  },
  actions: {
  },
  actionIcon: {
    color: theme.palette.text.secondary,
    textAlign: 'right!important',
    marginBottom: '5px',
    fontSize: 25,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}))

export default function PageTitle(props) {
  const {  title, withActions, handleCreateBtn, handleDeleteBtn } = props
  const styles = useStyles()

  return (
    <div className={styles.pageTitle}>
      <span>{title}</span>
      <span className={styles.actions} style={{ display: withActions ? 'inline' : 'none' }}>
        <IconButton className={styles.actionBtn} color="primary" onClick={handleCreateBtn}>
          <Create className={styles.actionIcon} />
        </IconButton>
        <IconButton className={styles.actionBtn} color="primary" onClick={handleDeleteBtn}>
          <Delete className={styles.actionIcon} />
        </IconButton>
      </span>
    </div>
  )
}