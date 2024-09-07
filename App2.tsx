import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExampl from './components/UseEffectExampl'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      <UseEffectExampl/>
    </View>
  )
}

export default App