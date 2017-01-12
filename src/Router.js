import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Main from './components/Main'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='main' component={Main} title='Main'/>
    </Router>
  )
}

export default RouterComponent
