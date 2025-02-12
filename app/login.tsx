import { View, Text, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles';
import { Boton } from '../components/Boton'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { router } from "expo-router";
import { Link } from "expo-router";
import { auth } from "../FireBaseconfig"

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logIn = async () => {
    try {
      const user = await (signInWithEmailAndPassword(auth, email, password));
      if (user) router.replace('/tabs')
    } catch (error: any) {
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto", "error.message");
    }
  }


  const register = async () => {
    try {
      const user = await (createUserWithEmailAndPassword(auth, email, password));
      if (user) router.replace('/tabs');
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error al registrar el usuario", error.message);
    }

  }

  return (
    <ScrollView contentContainerStyle={GlobalStyles.containerCentrado}>
      <TextInput style={GlobalStyles.textoIntr} placeholder='Usuario' value={email} onChangeText={setEmail}/>

      <TextInput style={GlobalStyles.textoIntr} placeholder='Contraseña' value={password} onChangeText={setPassword} secureTextEntry={true} />

      <Pressable style={GlobalStyles.btn} onPress={logIn}>
          <Text style={GlobalStyles.btnText}>Login</Text>
        </Pressable>

        <Pressable style={GlobalStyles.btn} onPress={register}>
          <Text style={GlobalStyles.btnText}>register</Text>
        </Pressable>
    </ScrollView>

  );
}


