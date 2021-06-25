import { useHistory, useRouteMatch } from "react-router-dom"
import { createTechnology } from "../../api/api"
import ItemForm from "../UI/ItemForm"
import PageTitle from "../UI/PageTitle"

export default function TechnologyCreate() {
  const history = useHistory()
  const match = useRouteMatch()

  const submitHandler = async data => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('image', data.image[0])
    console.log(data.title, data.image[0]) 
    await createTechnology(match.params.catId, formData)
    history.push('/')
  }

  return (
    <div>
      <PageTitle title="Create new technology" />
      <ItemForm onSubmit={submitHandler} />
    </div>
  )
}
