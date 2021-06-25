import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import TechnologiesTable from "../components/technologies/TechnologiesTable"
import AddButton from "../components/UI/AddButton"

const useStyles = makeStyles(theme => ({
  main: {
   
  },
}))

export default function Technologies() {
  const styles = useStyles()
  const history = useHistory()

  const deleteHandler = async () => {

  }


  return (
    <div className={styles.main}>
      <TechnologiesTable deleteTechnology={deleteHandler} />
      <AddButton title="Add category" onClick={() => history.push('/categories/create')} />
    </div>
  )
}