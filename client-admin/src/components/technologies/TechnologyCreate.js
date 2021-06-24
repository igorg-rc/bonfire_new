import { useHistory } from "react-router-dom"
import ItemForm from "../UI/ItemForm"
import PageTitle from "../UI/PageTitle"

export default function TechnologyCreate() {
  const history = useHistory()

  const submitHandler = data => {
    console.log(data)
    history.push('/')
  }

  return (
    <div>
      <PageTitle title="Create new technology" />
      <ItemForm onSubmit={submitHandler} />
    </div>
  )
}
