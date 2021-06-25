import { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { getTechnology, updateTechnology } from '../../api/api'
import ItemForm from "../UI/ItemForm"
import PageTitle from "../UI/PageTitle"

export default function TechnologyEdit() {
  const [technology, setTechnology] = useState()
  const history = useHistory()
  const match = useRouteMatch()

  useEffect(() => {
    const fetchTechnology = async (catId, techId) => {
      const fetchedTechnology = await getTechnology(match.params.catId, match.params.techId)
      setTechnology(fetchedTechnology)
    } 
    fetchTechnology()
  }, [])

  console.log(technology)

  const submitHandler = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('image', data.image[0])
    console.log(data.title, data.image[0]) 
    await updateTechnology(match.params.catId, match.params.techId, formData)
    history.push('/')
  }
  
  console.log(technology)

  return (
    <div>
      {technology 
      ?
      <div>
        <PageTitle title={`Edit technology "${technology.title}"`} />
        <ItemForm item={technology} onSubmit={submitHandler} />
      </div> 
      : 
      <div>Loading</div>} 
    </div>
  )
}
