import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  //STATE SÃO VALORES GLOBAIS DO APLICATIVO 
  state ={
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#A9A9A9',
  };


   //Formula do IMC
  calcularIMC = () => {
    const resultadoIMC = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultadoIMC)
    });
 
    //LEGENDAS SOBRE ESTADO 
    if(resultadoIMC < 18.5){
      this.setState({
        legenda: 'Magreza',
        cor: '#e67e22'
      });
    }
    else if(resultadoIMC >= 18.5 && resultadoIMC < 25.0){
      this.setState({
        legenda: 'Saudável',
        cor: '#2ecc71'
      });
    }
    else if(resultadoIMC > 24.9 && resultadoIMC < 30.0){
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#FFD700'
      });
    }
    else if(resultadoIMC > 29,9 && resultadoIMC < 35.0){
      this.setState({
        legenda: 'Obesidade Grau I',
        cor: '#FFA500'
      });
    }
    else if(resultadoIMC > 34,9 && resultadoIMC < 40.0){
      this.setState({
        legenda: 'Obesidade Grau II',
        cor: '#FF8C00'
      });
    }    
    else if(resultadoIMC > 39.9){
      this.setState({
        legenda: 'Obesidade Grau III',
        cor: '#FF4500'
      });
    }




  }

  render() {

    return (
      <View style={styles.app}>
          <Text style={styles.legenda}> Seu IMC </Text>

      <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
      </View>

      <View>
          <TextInput style={styles.peso}
          label="Peso"
          onChangeText={valor => {
            this.setState({peso: valor.replace(',', '.')})
          }}
          />
          <TextInput style={styles.altura}
           label="Altura"
          onChangeText={valor => {
            this.setState({altura: valor.replace(',', '.')})
          }}
          />
          <Button mode="contained" onPress={this.calcularIMC}>
           Calcular
          </Button>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    paddingTop: 50,
  },

  painel:{
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 20,
    padding: 8,
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  resultado: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  diagnostico: {
    textAlign: 'center',
    fontSize: 17,
  },

  peso: {
    marginVertical: 10,

  },

  altura: {
    marginVertical: 10,
  },
});
