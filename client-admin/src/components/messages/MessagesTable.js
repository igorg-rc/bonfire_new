import { useState, useEffect } from "react"
import moment from 'moment'
import { makeStyles, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, useTheme } from "@material-ui/core"
import {FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage} from '@material-ui/icons';
import { getMessages } from "../../api/api";


const useStyles = makeStyles(theme => ({
  headerCell: {
    fontWeight: 900,
  },
  table: {
    width: 350, 
    overflow: 'hidden',
    
  },
  bodyRow: {
    '&:last-child td, &:last-child th': {
      border: 0
    },
    '&:hover, &:hover td': {
      background: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
    }
  }
}))

const paginationButtonsStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  }
}))

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    right: true
  }
];

const TablePaginationActions = props => {
  const { count, page, rowsPerPage, onChangePage } = props
  const styles = paginationButtonsStyles()
  const theme = useTheme()

  const handleFirstPageButton = event => {
    onChangePage(event, 0)
  }

  const handleLastPageButton = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage - 1)))
  }

  const handlePrevPageButton = event => {
    onChangePage(event, page - 1)
  }

  const handleNextPageButton = event => {
    onChangePage(event, page + 1)
  }

  return (
    <div className={styles.root}>
      <IconButton
        onClick={handleFirstPageButton}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handlePrevPageButton} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextPageButton}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButton}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  )
}

export default function MessagesTable({ setMessage }) {
  const styles = useStyles()

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getMessages()
      setMessages(fetchedMessages)
    }
    fetchMessages()
  }, [])

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(15)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, messages.length - page * rowsPerPage)

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
    <div>
      <TablePagination
        rowsPerPageOptions={[]}
        colSpan={3}
        count={messages.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
  </div>
    <TableContainer className={styles.tableContainer}>
      <Table className={styles.table} size="small" component={Paper}>
        <TableHead>
          <TableRow>
            { columns && columns.map(item => (
              <TableCell component="th" key={item.name} className={styles.headerCell}>{ item.name }</TableCell>
            ))}
          </TableRow>
        </TableHead>  
        <TableBody>
          {(rowsPerPage > 0 
            ? 
            messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
            : 
            messages).map(item => (
            <TableRow key={item.id} className={styles.bodyRow} onClick={() => setMessage(item._id)}>
              <TableCell component="td" className={styles.bodyCell}>{ item.senderName }</TableCell>
              <TableCell component="td" className={styles.bodyCell} style={{ align: 'right' }}>
                { moment.utc(item.createdAt).local().format('DD MMM YYYY') }
              </TableCell>
            </TableRow>
          )) }
          { emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>  
    </TableContainer>
    </>
  )
}