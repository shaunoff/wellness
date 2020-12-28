import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AuthorizedApolloProvider from './config/AuthorizedApolloProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './config/theme'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="shaunoff.us.auth0.com"
      clientId="70XK1WSsTpt3S1MTu9kzJ6P4uQ6ZhlAL"
      redirectUri={window.location.origin}
      audience="https://shaunoff.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <AuthorizedApolloProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
