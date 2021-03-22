import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../configs/tema';

const Subtitulo = ({ children }) => {
    return (
        <View>
            <Text style={styles.ubtitulo}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ubtitulo: {
        color: theme.colors.primary,
        fontSize: 18,
    },
});

export default Subtitulo;
