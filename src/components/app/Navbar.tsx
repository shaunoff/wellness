import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import logo from './Sprightly.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      //flexGrow: 1,
    },
    appbar: {
      background: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth0()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} elevation={1}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} style={{ paddingLeft: '32px', height: '26px' }} className={classes.title} />
          {isAuthenticated && <Button onClick={() => logout()}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
