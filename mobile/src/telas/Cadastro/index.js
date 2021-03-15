import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Subtitulo from '../../componentes/Subtitulo';
import Titulo from '../../componentes/Titulo';
import FormularioCadastro from './FormularioCadastro';

const Cadastro = () => {
    return (
        <View>
            <View style={styles.container}>
                <Titulo>Cadastre-se agora</Titulo>
            </View>
            <View style={styles.separador}>
                <Subtitulo>Dados pessoais</Subtitulo>
            </View>

            <View style={styles.container}>
                <FormularioCadastro />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separador: {
        marginBottom: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cadastro;
