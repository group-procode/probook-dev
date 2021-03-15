import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Titulo = ({ children }) => {
    return (
        <View>
            <Text style={styles.titulo}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titulo: {
        color: '#000',
        fontSize: 32,
        fontFamily: 'Amaranth_400Regular',
    },
});

export default Titulo;
