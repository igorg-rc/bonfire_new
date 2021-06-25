import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import './App.css'

import Layout from './components/UI/Layout'
import Industries from './pages/Industries'
import Technologies from './pages/Technologies'
import Messages from './pages/Messages'
import { grey, indigo, red, teal } from '@material-ui/core/colors'
import Drawer from './components/UI/Drawer'
import IndustryCreate from './components/industries/IndustryCreate'
import IndustryEdit from './components/industries/IndustryEdit'
import TechnologyCreate from './components/technologies/TechnologyCreate'
import TechnologyEdit from './components/technologies/TechnologyEdit'
import CategoryCreate from './components/categories/CategoryCreate'
import CategoryEdit from './components/categories/CategoryEdit'

const adminTheme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo[400],
      dark: indigo[600],
      error: red[800],
      default: grey[600]
    },
    secondary: {
      main: teal[600],
      light: teal[500],
      dark: teal[700],
      error: red[600],
      default: grey[400]
    },
    text: {
      primary: grey[900],
      secondary: grey[100],
      disabled: grey[700],
      error: red[500]
    },
    overrides: {
      MuiTablePagination: {
        spacer: {
          flex: 'none'
        }
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={adminTheme}>
      <Layout>
      <div className="App">
        <Router>
          <Drawer />
          <Switch>
            <Route path='/' exact component={Technologies} />
            <Route path='/technologies/create' component={TechnologyCreate} />
            <Route path='/technologies/edit/:id' component={TechnologyEdit} />
            <Route path='/industries/create' component={IndustryCreate} />
            <Route path='/industries/edit/:id' component={IndustryEdit} />
            <Route path='/industries' component={Industries} />
            <Route path='/categories/create' component={CategoryCreate} />
            <Route path='/categories/edit/:id' component={CategoryEdit} />
            <Route path='/messages' component={Messages} />
            <Route path='/messages' component={Messages} />
          </Switch>
        </Router>
      </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
