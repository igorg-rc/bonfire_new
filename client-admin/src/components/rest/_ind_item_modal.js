import { useState } from 'react'
import { makeStyles, Card, CardActionArea, CardActions, CardMedia, Typography, IconButton } from '@material-ui/core'
import { Delete, Create } from '@material-ui/icons'
import DeleteModal from './UI/DeleteModal'
import FormModal from './UI/FormModal'

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
    color: theme.palette.text.primary
  }
}));

export default function IndustryItem({ id, image, title, deleteIndustry }) {
  const styles = useStyles();
  const [industry, setIndustry] = useState(null)
  const [deleteModalIsOpen, setDeleteModalOpen] = useState(false)
  const [formModalIsOpen, setFormModalOpen] = useState(false)
  const [itemId, setItemId] = useState(null)

  const openDeleteModalHandler = () => {
    setDeleteModalOpen(true)
  }

  const closeDeleteModalHandler = () => {
    setDeleteModalOpen(false)
  }

  // has to be passed id and modal trigger
  const openFormModalHandler = () => {
    setFormModalOpen(true)
  }

  const closeFormModalHandler = () => {
    setFormModalOpen(false)
  }

  const deleteIndustryHandler = id => {
    setDeleteModalOpen(true)
    deleteIndustry(id)
    setDeleteModalOpen(false)
  }

  const formIndustryHandler = id => {
    setFormModalOpen(true)
    setIndustry(id)
  }

  const submitIndustryHandler = data => {
    console.log(data, itemId)
  }

  return (
    <div className={styles.main}>
      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            width="100%"
            image={image}
            id={id}
            title={title}
          />
        </CardActionArea>
        <CardActions className={styles.actionsSection}>
          <Typography variant="h5" color="textPrimary">{title}</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton aria-label="add to favorites" onClick={() => formIndustryHandler(id)}>
              <Create className={styles.btnIcon} />
            </IconButton>
            <IconButton aria-label="share" onClick={() => openDeleteModalHandler()}>
              <Delete className={styles.btnIcon} />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      <DeleteModal 
        openDeleteModal={deleteIndustryHandler} 
        closeDeleteModal={closeDeleteModalHandler} 
        open={deleteModalIsOpen} 
        handleDelete={() => deleteIndustryHandler(id)}  
      />
      <FormModal         
        openFormModal={openFormModalHandler} 
        closeFormModal={closeFormModalHandler} 
        open={formModalIsOpen} 
        handleDelete={() => deleteIndustryHandler(id)}  
        onSubmit={submitIndustryHandler}
        itemId={itemId}
        industry={industry}
      />
    </div>
  );
}