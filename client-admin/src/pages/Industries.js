import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import { useState, useEffect} from "react"
import { useHistory } from 'react-router-dom'
import { getIndustries, getIndustry, createIndustry, deleteIndustry } from '../api/api'

import IndustryItem from "../components/industries/IndustryItem"
import AddButton from "../components/UI/AddButton"
import PageTitle from "../components/UI/PageTitle"

const useStyles = makeStyles(theme => ({
  main: {
    
  },
  industriesList: {
    paddingTop: '2vh'
  },
  addIndustryBtn: {
    padding: '20px 5px',
    marginLeft: -10,
    textAlign: 'left'
  }
}))

export default function Industries() {
  const history = useHistory()
  const styles = useStyles()
  const [industries, setIndustries] = useState([])

  useEffect(() => {
    const fetchIndustries = async () => {
      const fetchedItems = await getIndustries()
      setIndustries(fetchedItems)
    }
    fetchIndustries()
  }, [])
  
  
  const deleteItemHandler = async id => {
    try {
      await deleteIndustry(id)
      setIndustries(industries.filter(item => item.id !== id))
    } catch (error) {
      console.log(error)      
    }
    // history.push('/')
    // history.replace('/industries')
    window.location.reload(false)
  }

  
  console.log(industries)


  return (
    <div className={styles.main}>
      <PageTitle title="Industries" />
      <div className={styles.industriesList}>
        <Grid container spacing={2}>
        { industries.map(industry => (
          <Grid item key={industry._id} xs={12} md={4}>
            <IndustryItem 
              image={industry.imgUrl} 
              title={industry.title} 
              id={industry._id} 
              deleteIndustry={() => deleteItemHandler(industry._id)} />
          </Grid>
        )) }

        </Grid>
        <AddButton title="Add industry" onClick={() => history.push('/industries/create')} />
      </div>
      
    </div>
  )
}
