import CategoryForm from "./CategoryForm"
import PageTitle from "../UI/PageTitle"
import { useHistory } from "react-router"
import { createCategory } from "../../api/api"

export default function CategoryCreate() {
  const history = useHistory()

  const submitHandler = async data => {
    await createCategory(data)
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
