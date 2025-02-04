import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles';
import { Boton } from '../components/Boton'
import { Link } from "expo-router";


const login = () => {
  return (
    <ScrollView contentContainerStyle={GlobalStyles.containerCentrado}>
        <TextInput style={GlobalStyles.textoIntr} placeholder='Usuario'/>

        <TextInput style={GlobalStyles.textoIntr} placeholder='Contraseña' secureTextEntry={true}/>

        <Boton label='Acceder' width={200} backgroundColor='naranja' link='./tabs'></Boton>

    </ScrollView>

  )
}

export default login