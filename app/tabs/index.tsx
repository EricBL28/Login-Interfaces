import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Boton } from '../../components/Boton'
import { getAuth } from 'firebase/auth';
import { auth } from '@/FireBaseconfig';
import { router } from 'expo-router';

const ScreenPrincipal = () => {
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });

  return (
    <View style={GlobalStyles.containerCentrado} >
      <Pressable style={GlobalStyles.btn} onPress={() => auth.signOut()}>
        <Text style={GlobalStyles.btnText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  )
}

export default ScreenPrincipal