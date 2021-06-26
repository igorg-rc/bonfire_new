import { useHistory } from "react-router-dom"
import TechnologiesTable from "../components/technologies/TechnologiesTable"
import AddButton from "../components/UI/AddButton"

export default function Technologies() {
  const history = useHistory()

  return (
    <div>
      <TechnologiesTable />
      <AddButton title="Add category" onClick={() => history.push('/categories/create')} />
    </div>
  )
}