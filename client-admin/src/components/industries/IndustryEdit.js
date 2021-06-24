import { useEffect, useState } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import { getIndustry, updateIndustry } from "../../api/api"
import ItemForm from "../UI/ItemForm"
import PageTitle from "../UI/PageTitle"

export default function IndustryEdit() {
  const [industry, setIndustry] = useState(null)
  const match = useRouteMatch()
  const history = useHistory()

  useEffect(() => {
    const fetchIndustry = async (id) => {
      const fetchedIndustry = await getIndustry(match.params.id)
      setIndustry(fetchedIndustry)
    }
    fetchIndustry()

    return () => {
      setIndustry(null)
    }
    
  }, [match.params.id])

  const submitHandler = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('image', data.image[0])
    try {
      await updateIndustry(match.params.id, formData)
      history.push('/industries')
      console.log(`Industry was successfully updated`)
    } catch (error) { 
      console.log(error)
    }
  }
  
  console.log(industry)

  return (
    <div>
      {!industry 
      ?
      <div>Loading...</div>
      : 
      <div>
        <PageTitle title={`Edit industry "${industry.title}"`} />
        <ItemForm item={industry} onSubmit={submitHandler} />
      </div> }
    </div>
  )
}
