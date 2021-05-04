import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Titulo from '../../componentes/Titulo';


const AvisoRedefinaSenha = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.container_titulo}>
                <Titulo>Redefina Sua Senha</Titulo>
            </View>
            <View style={styles.containerMensagem}>
                <Text style={styles.info}>Se você Esqueceu sua senha, insira{"\n"} seu e-mail e tentaremos enviar um codigo para a sua caixa de mensagens</Text>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container_titulo:{
        
        marginBottom:25
    },
    titulo:{
        fontSize:24
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:45
    },
    containerMensagem:{
        width:245
    },
    info:{
        fontSize:13,
        textAlign:'center',
        color:"#808080"
    }
})

export default AvisoRedefinaSenha;