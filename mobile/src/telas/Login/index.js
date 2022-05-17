import React, { Component } from 'react'
import {Alert, Text, TextInput, StyleSheet, View, Image, TouchableOpacity} from 'react-native'

export default class App extends Component{

    clicouEntrar = () => {
        Alert.alert("Aviso", "Login!");
    }

    clicouCadastrar = () => {
        Alert.alert("Aviso", "Cadastro!");
    }

    render(){
        return(
            <View style = {styles.container}>
                <Image
                    source = {require('../../assets/logo.jpg')}
                    style = {styles.logo}
                />

                <Text 
                    style = {styles.botaoTxt}
                >
                    Gerencie e saiba mais sobre os livros que você pega emprestado!
                </Text>

                <TextInput
                    style = {styles.input}
                    placeholder = "RA"
                />

                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    placeholder = "Senha"
                />

                <TouchableOpacity
                    style = {styles.botaoEntrar}
                    onPress = {() => {this.clicouEntrar()}}
                >
                    <Text style = {styles.botaoTxt}>Entrar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 150, 
        height: 50,
        borderRadius: 100
    },

    input: {
        marginTop: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
        borderRadius: 3
    },

    botaoEntrar: {
        width: 120,
        height: 42,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoTxt: {
        fontSize: 16,
        fontStyle: 'normal'
    }
})