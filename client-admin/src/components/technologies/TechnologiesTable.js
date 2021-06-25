import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from "@material-ui/core"
import { Delete, Create } from '@material-ui/icons'
// import techData from "../../mocData/techData"
import PageTitle from "../UI/PageTitle"
import { deleteCategory, getCategories } from "../../api/api"

const useStyles = makeStyles(theme => ({
  main: {
   
  },
  tableHolder: {
    padding: '20px 0 30px 50px'
  },
  table: {
    // minWidth: 650,
    color: 'black'
  },
  tableRow: {
    '&:last-child td': {  // !!! Remove border-bottom of last row !!!
      borderBottom: 0
    }
  },
  titleColumn: {
    marginRight: '120px'
  },
  tableCell: {
    fontSize: 15,
    fontWeight: 550
  },
  tableCellHead: {
    fontWeight: 800,
  },
  tableTitleColumn: {
    minWidth: 950
  },
  techImage: {
    width: 30,
    paddungTop: 5,
    verticalAlign: 'middle' // !!! Align images in MUI table !!!
  },
  actionBtn: {
    margin: '0 3px!important',
    padding: '0!important',
  },
  actionIcon: {
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
  
}))

export default function TechnologiesTable() {
  const styles = useStyles()
  const [categories, setCategories] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories()
      setCategories(fetchedCategories)
    }
    fetchCategories()
  }, [])

  const deleteCategoryHandler = async id => {
    await deleteCategory(id)
    const newList = categories.filter(item => item._id !== id)
    setCategories(newList)
  }

  const deleteTechnology = id => {
    // const newList = technologies.filter(item => item.id !== id)
    // const newList = industries.filter(item => item.id !== id)
    // setTechnologies(newList)
  }

  console.log(categories)

  return (
    !categories ? <div>Loading...</div> : 
    <div className={styles.main}>
      { categories.map(category => (
        <div key={category._id}>
          <PageTitle title={category.title} 
            withActions 
            handleEditBtn={() => history.push(`/categories/edit/${category._id}`)} 
            handleDeleteBtn={() => deleteCategoryHandler(category._id)}
          />
            <div className={styles.tableHolder}>
            <Table className={styles.table} size="small" aria-label="a danse table" color="textPrimary">
              <TableHead>
                <TableRow>
                  <TableCell className={[styles.tableCell, styles.tableCellHead].join(' ')}>Image</TableCell>
                  <TableCell className={[styles.tableCell, styles.tableCellHead, styles.tableTitleColumn].join(' ')} align="left">Title</TableCell>
                  <TableCell className={[styles.tableCell, styles.tableCellHead].join(' ')} align="right">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {category.technologies.map(row => (
                  <TableRow key={row.imgUrl} color="textPrimary" className={styles.tableRow}>
                    <TableCell className={styles.tableCell} component="td" scope="row">
                      <img src={row.imgUrl} alt={row.title} className={styles.techImage} />
                    </TableCell>
                    <TableCell className={styles.tableCell} component="td" scope="row" align="left">{row.title}</TableCell>
                    <TableCell className={styles.tableCell} component="td" scope="row" align="right">
                      <IconButton className={styles.actionBtn} color="primary" onClick={() => history.push( `/technologies/edit/${row._id}`)}>
                        <Create className={styles.actionIcon} />
                      </IconButton>
                      <IconButton className={styles.actionBtn} color="primary" onClick={() => {}}>
                        <Delete className={styles.actionIcon} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>))}
    </div>
  )
}
