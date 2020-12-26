import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './config/apollo'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './config/theme'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
