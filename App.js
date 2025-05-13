import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Button, Modal } from 'react-native';
import Entrar from './Entrar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibleModal: false
    }
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({visibleModal:true})
  }
  sair(){
    this.setState({visibleModal: false})
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Entrar' onPress={this.entrar}></Button>
        <Modal animationType='slide' visible={this.state.visibleModal}> 
          <Entrar fechar={this.sair}></Entrar>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;