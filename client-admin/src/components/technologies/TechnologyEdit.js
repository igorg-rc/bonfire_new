import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ItemForm from "../UI/ItemForm"
import PageTitle from "../UI/PageTitle"

export default function TechnologyEdit() {
  const [technology, setTechnology] = useState(null)
  const history = useHistory()
  
  useEffect(() => {
    setTechnology({
      title: 'Technology title',
      image: 'sdlfkjsdlklsdfskdfsdklfsad'
    })
  }, [])

  const submitHandler = (data) => {
    console.log(data)
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
