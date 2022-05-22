import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Titulo from '../../componentes/Titulo';
import Subtitulo from '../../componentes/Subtitulo';
import { theme } from '../../configs/tema';

const Emprestimo = () => {
    return (
        <View>
            <View style={styles.container}>
                <Titulo>Reservar agora</Titulo>
            </View>
            <View style={styles.separador}>
                <Subtitulo>Dados do livro</Subtitulo>
            </View>

            <View style={styles.containerInfoLivro}>
                <Image style={styles.capaLivro} source={require('../../../assets/book.png')} />

                <View>
                    <Text style={styles.textoInfo}>Nome do autor</Text>
                    <Text style={styles.tituloLivro}>Título do livro</Text>
                </View>
                
            </View>

            <View style={
                    (styles.container,
                    { marginVertical: 20, alignSelf: 'center', marginTop: 30 })
                }>
                <Subtitulo>Dados do empréstimo</Subtitulo>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.textoInfo}>Data de retirada</Text>
                <Text style={styles.textoInfo}>02/06/2022</Text>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.textoInfo}>Data de devolução prevista</Text>
                <Text style={styles.textoInfo}>17/06/2022</Text>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.textoInfo}>Período de posse do livro</Text>
                <Text style={styles.textoInfo}>15 dias</Text>
            </View>

            <TouchableOpacity style={styles.botaoSecundario}>
                <Text style={styles.textoBotaoSecundario}>Alterar data de retirada</Text>
            </TouchableOpacity>

            <View style={
                    (styles.container,
                    { marginVertical: 20, alignSelf: 'center', marginTop: 60 })
                }>
                <Subtitulo>Informações adicionais</Subtitulo>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.textoInfo}>Taxa de atraso/diária</Text>
                <Text style={styles.textoInfo}>R$ 0,00</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Concluir reserva</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInfo: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerInfoLivro: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    capaLivro: {
        height: 160,
        marginRight: 10
    },
    separador: {
        marginBottom: 23,
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
    textoInfo: {
        color: '#808080',
        fontSize: 18,
    },
    tituloLivro: {
        color: '#000',
        fontSize: 29,
        fontFamily: 'Amaranth_400Regular',
        marginTop: 10
    },
    botaoSecundario: {
        marginTop: 17,
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: theme.colors.primary,
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
    textoBotaoSecundario: {
        color: theme.colors.primary,
        fontSize: 20,
    },
});

export default Emprestimo;