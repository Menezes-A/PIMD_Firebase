import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import FirebaseApp from './components/Atividade6/FirebesaApp'
import Rotas from './components/Atividade7/src/Rotas'

export class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <Rotas></Rotas>
      </SafeAreaProvider>
    )
  }
}

export default App
