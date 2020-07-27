import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, FormResetStyle, theme } from '3oilerplate'
import { SApp } from './App.styled'
import { DataProvider } from '../context'
import { HomeView, RodsDetailView, RodsListView } from '../views'
import { LocalGlobalStyle, fonts, colors } from '../style'
import { Sidebar } from '../components'
import './fonts.css'

export const history = createBrowserHistory()

export const App = () => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: {
          ...theme.fonts,
          ...fonts,
        },
        colors: {
          ...theme.colors,
          ...colors,
        },
      }}
    >
      <DataProvider>
        <GlobalStyle />
        <FormResetStyle />
        <LocalGlobalStyle />
        <SApp>
          <Sidebar />
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route exact path="/rods">
                <RodsListView />
              </Route>
              <Route exact path="/rods/:rodId/edit">
                <RodsDetailView />
              </Route>
            </Switch>
          </Router>
        </SApp>
      </DataProvider>
    </ThemeProvider>
  )
}
