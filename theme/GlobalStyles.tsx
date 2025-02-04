import { StyleSheet } from "react-native"
import { Colors } from "./Colors"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:"100%",
        backgroundColor:Colors.grey

    },
    titulo: {
        fontSize: 22
    },
    textoIntr: {

        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
        width:300,
        marginBottom: 20,
        color: Colors.blueText,
        backgroundColor:Colors.blueDark,
        borderRadius:25,

    },
    linkeo:{
        width: 125,
        height: 100,
        textAlign: 'center',
        padding: 0,
        fontSize: 17,
        borderRadius: 30,
        backgroundColor: Colors.blueDark,
        opacity: 0.7,
        fontWeight: 'bold',
    },
    textoEntrar:{
        
        fontSize: 25,
        textAlign:'center',
        justifyContent:'center',
        color: Colors.orangeContainer,
        opacity: 0.7,
        fontWeight: 'bold',
    }
})