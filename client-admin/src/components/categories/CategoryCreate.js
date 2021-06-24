import CategoryForm from "./CategoryForm"
import PageTitle from "../UI/PageTitle"
import { useHistory } from "react-router"

export default function CategoryCreate() {
  const history = useHistory()

  const submitHandler = data => {
    console.log(data)
    history.push('/')
  }

  return (
    <div>
      <PageTitle title="Create new category" />
      <CategoryForm onSubmit={submitHandler} />
    </div>
  )
}
