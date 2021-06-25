import CategoryForm from "./CategoryForm"
import PageTitle from "../UI/PageTitle"
import { useHistory } from "react-router"
import { createCategory, getCategory, updateCategory } from "../../api/api"
import { useEffect, useState } from "react"
import { useRouteMatch } from "react-router-dom"

export default function CategoryCreate() {
  const [category, setCategory] = useState(null)
  const history = useHistory()
  const match = useRouteMatch()

  useEffect(() => {
    const fetchCategory = async id => {
      const fetchedCategory = await getCategory(match.params.id)
      setCategory(fetchedCategory)
    }
    fetchCategory()
  }, [])

  console.log(category)

  const submitHandler = async data => {
    await updateCategory(match.params.id, data)
    console.log(data)
    history.push('/')
  }

  return (
    <div>
      { category ?
      
        <div>
          <PageTitle title={`Edit category "${category.title}"`} />
          <CategoryForm onSubmit={submitHandler} item={category} />
        </div> 
      :
      <div>...Loading</div>
      }
    </div>
  )
}