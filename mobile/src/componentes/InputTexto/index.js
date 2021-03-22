import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './style';

const InputTexto = (props) => {
    return (
        <TextInput
            underlineColor="transparent"
            style={styles.inputTexto}
            {...props}
        />
    );
};

const Senha = (props) => {
    return (
        <View style={styles.senhaContainer}>
            <TextInput
                underlineColor="transparent"
                style={styles.senhaInput}
                {...props}
            />

            <View style={styles.senhaStatus}>
                <Text style={styles.senhaStatusTexto}>Fraca</Text>
            </View>
        </View>
    );
};

InputTexto.Senha = Senha;

export default InputTexto;
