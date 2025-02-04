import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles';

import { Link } from "expo-router";


const login = () => {
  return (
    <ScrollView contentContainerStyle={GlobalStyles.containerCentrado}>
        <TextInput style={GlobalStyles.textoIntr} placeholder='Usuario'/>

        <TextInput style={GlobalStyles.textoIntr} placeholder='Contraseña' secureTextEntry={true}/>

        <Pressable>
          <Link style={GlobalStyles.linkeo} href='/tabs'>
          <Text style={GlobalStyles.textoEntrar}>ACCEDER</Text>
          </Link>
        </Pressable>


    </ScrollView>

  )
}

export default login