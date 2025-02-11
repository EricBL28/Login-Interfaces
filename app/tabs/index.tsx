import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Boton } from '../../components/Boton'

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>

      <Boton label='Log out' width={200} backgroundColor='naranja' link='../login'></Boton>
    </View>
  )
}

export default ScreenPrincipal