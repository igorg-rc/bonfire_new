import { useHistory } from "react-router-dom"
import ItemForm from "../UI/ItemForm"
import { createIndustry } from '../../api/api'
import PageTitle from "../UI/PageTitle"

export default function IndustryCreate() {
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
      <PageTitle title="Create new industry" />
      <ItemForm onSubmit={submitHandler} />
    </div>
  )
}
