import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import Cadastro from './src/telas/Cadastro';
import RedefinicaoSenha from './src/telas/RedefiniçãoSenha';
import { useFonts, Amaranth_400Regular } from '@expo-google-fonts/amaranth';

export default function App() {
    let [fontsLoaded] = useFonts({
        Amaranth_400Regular,
    });

    if (!fontsLoaded) {
        return <Text>Wait</Text>;
    }

    return (
        <KeyboardAvoidingView style={styles.fundo}>
            <StatusBar style="auto" />
            <RedefinicaoSenha />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
