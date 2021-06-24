import { useHistory } from "react-router-dom"
import ItemForm from "../UI/ItemForm"
import { makeStyles, Typography } from '@material-ui/core'
import { createIndustry } from '../../api/api'

const useStyles = makeStyles(theme => ({
  pageTitle: {
    background: theme.palette.primary.dark,
    width: '100%',
    color: '#fff',
    padding: '10px',
    textAlign: 'left'
  },
}))

export default function IndustryCreate() {
  const styles = useStyles()
  const history = useHistory()
  
  const submitHandler = async data => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('image', data.image[0])
    console.log(data.title, data.image[0]) 
    await createIndustry(formData)
    history.push('/industries')
  } 

  return (
    <div>
      <div className={styles.pageTitle}>
        <Typography variant="h4">Create new industry</Typography>
      </div>
      <ItemForm onSubmit={submitHandler} />
    </div>
  )
}
