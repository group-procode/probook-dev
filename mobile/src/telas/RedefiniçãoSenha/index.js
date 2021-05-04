import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import AvisoRedefinaSenha from '../../componentes/AvisoRedefinaSenha';
import FormRedefinirSenha from './FormRedefinirSenha'
const RedefinicaoSenha = ()=>{
    return(
        <View>
            <Image style={styles.image} source={require('../../../assets/redefinicao-senha.png')}/>
           <AvisoRedefinaSenha ></AvisoRedefinaSenha>
           <FormRedefinirSenha></FormRedefinirSenha>
        </View>
    );
};



const styles = StyleSheet.create({
  image:{
    margin:0,
    padding:0,
    width:250,
    marginTop:-100,
    marginLeft:25,
    height:250
  }
})




export default RedefinicaoSenha;