import { StyleSheet } from 'react-native';
import { theme } from '../../configs/tema';

export const styles = StyleSheet.create({
    inputTexto: {
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: theme.colors.backgrounInput,
        width: 300,
        height: 50,
        paddingHorizontal: 25,
        fontSize: 18,
    },
    senhaContainer: {
        flexDirection: 'row',
    },
    senhaInput: {
        width: 200,
        height: 50,
        justifyContent: 'flex-start',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 18,
        borderWidth: 0,
        backgroundColor: theme.colors.backgrounInput,
        paddingHorizontal: 25,
    },
    senhaStatus: {
        width: 100,
        justifyContent: 'flex-end',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 25,
    },
    senhaStatusTexto: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
});
