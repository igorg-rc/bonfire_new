import { Button, Typography, makeStyles } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const useStyles = makeStyles(theme => ({
  btnHolder: {
    padding: '20px 5px',
    marginLeft: -10,
    textAlign: 'left'
  },
  addBtn: {
    padding: '3px 12px',
    margin: 5,
  },
  BgPr: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
  BgSc: {
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark
    }
  },
  btnIcon: {
    margin: 'auto 2px',
    fontSize: 18,
    color: theme.palette.text.secondary
  },
  btnTitle: {
    margin: 3,
    fontSize: 15
  }
}))

export default function AddButton({ title, primary, onClick }) {
  const styles = useStyles()

  const clickBtn = () => {
    onClick()
  }

  return (
    <div className={styles.btnHolder}>
      <Button 
        className={primary ? [styles.addBtn, styles.BgPr].join(' ') : [styles.addBtn, styles.BgSc].join(' ')} 
        onClick={clickBtn}>
        <AddCircleOutlineIcon className={styles.btnIcon} />
        <Typography paragraph color="textSecondary" className={styles.btnTitle}>{title}</Typography>
      </Button>
    </div>
  )
}
