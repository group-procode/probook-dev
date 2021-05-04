import React from 'react';
import { View, TextInput, TouchableOpacity,Text,StyleSheet } from 'react-native';
import { theme } from '../../../configs/tema';
import InputTexto from '../../../componentes/InputTexto';
const FormRedefinicaoSenha = ()=>{
    return(
        <View>
           <InputTexto  style={styles.input} placeholder="Seu e-mail aqui"></InputTexto>
           <TouchableOpacity style={styles.botao}>
               <Text style={styles.textoBotao}>Enviar e-mail</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.botaoSecondario}>
               <Text style={styles.textoBotaoSecundario}>Redefinir por SMS</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        backgroundColor:"#F9F9F8",
        width:300,
        height:35,
        marginBottom:10
    },
    botao:{
        width: 300,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginBottom:10
    },
    textoBotao: {
        color: '#fff',
        fontSize: 14,
    },
    botaoSecondario:{
        width: 300,
        height: 40,
        borderRadius: 10,
        borderStyle:"solid",
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:theme.colors.primary
    },
    textoBotaoSecundario: {
        color:theme.colors.primary,
        fontSize: 14,
    },
})


export default FormRedefinicaoSenha;