import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputTexto from '../../../componentes/InputTexto';
import Subtitulo from '../../../componentes/Subtitulo';
import { theme } from '../../../configs/tema';

const FormularioCadastro = () => {
    return (
        <View>
            <View style={styles.container}>
                <InputTexto placeholder="Nome de usuário" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Nome completo" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="E-mail" />
            </View>

            <View style={styles.container}>
                <InputTexto.Senha placeholder="Senha" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Confirmação de senha" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Endereço" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Celular" />
            </View>

            <View
                style={
                    (styles.container,
                    { marginVertical: 20, alignSelf: 'center' })
                }
            >
                <Subtitulo>Dados sobre a faculdade</Subtitulo>
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Nome da faculdade" />
            </View>

            <View style={styles.container}>
                <InputTexto placeholder="Registro do aluno (RA)" />
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        marginTop: 17,
        width: 300,
        height: 50,
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
    },
    textoBotao: {
        color: '#fff',
        fontSize: 20,
    },
});

export default FormularioCadastro;
