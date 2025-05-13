import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Button, Modal } from 'react-native';

class Entrar extends Component{
    render(){
        return(
        <View style={{backgroundColor: '#292929', flex: 1}}>
          <Text style={{color: '#FFF', fontSize: 28}}>Seja Bem Vindo</Text>
          <Button title='Sahur' onPress={() => this.props.fechar()}></Button>
        </View>
        );
    }
}

export default Entrar;