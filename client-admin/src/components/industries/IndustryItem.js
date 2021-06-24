import { makeStyles, Card, CardActionArea, CardActions, CardMedia, Typography, IconButton } from '@material-ui/core'
import { Delete, Create } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400
  },
  cardContent: {
    background: "#fff",
    height: '20!important'
  },
  actionsSection: {
    background: theme.palette.primary.main,
    marginTop: '5px'
  },
  btnAction: {
    marginLeft: 'auto',
    padding: 0
  },
  btnIcon: {
    color: theme.palette.text.secondary
  }
}));

export default function IndustryItem({ id, image, title, deleteIndustry }) {
  const styles = useStyles();
  const history = useHistory()

  return (
    <div className={styles.main}>
      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={image}
            height="100%"
            width="100%"
            image={image}
            id={id}
            title={title}
          />
        </CardActionArea>
        <CardActions className={styles.actionsSection}>
          <Typography variant="h5" color="textSecondary">{title}</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton aria-label="add to favorites" onClick={() => history.push(`/industries/edit/${id}`)}>
              <Create className={styles.btnIcon} />
            </IconButton>
            <IconButton aria-label="share" onClick={deleteIndustry}>
              <Delete className={styles.btnIcon} />
            </IconButton>
          </div>
        </CardActions>
      </Card>
     
    </div>
  );
}