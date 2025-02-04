import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { RelativePathString , Link} from "expo-router";


interface Props {
    label: string,
    backgroundColor: 'naranja' | 'gris',
    width?:  number,
    onPress?: () => void;
    link: RelativePathString; 
}


export const Boton = ({label, backgroundColor,width, onPress, link}:Props) => {
    const accion = (() => {
        if (onPress) onPress();
    })
    
    return (
        
        <Pressable>
            <Link 
                style={[GlobalStyles.boton,
                    backgroundColor === 'naranja' ? GlobalStyles.botonAzul:null, backgroundColor ==='gris' 
                    ?GlobalStyles.boton:null,
                    {width},
                ]}
                onPress={accion}
                href={link}>{label}
            </Link>
        </Pressable>
    )
};
export default Boton


