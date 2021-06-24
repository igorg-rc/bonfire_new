import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '100%',
    padding: '75px 0 0 50px',
    marginRight: 'auto',
    // background: theme.palette.secondary.main
  }
}))

export default function Layout({ children }) {
  const styles = useStyles()

  return (
    <main>
      <Container>
        <div className={styles.main}>
          { children }
        </div>
      </Container>
    </main>
  )
}
