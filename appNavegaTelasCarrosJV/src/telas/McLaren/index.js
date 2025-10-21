import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function McLaren({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>E, por fim, apresento-lhe a história da McLaren!</Text>
      
      <Text style={styles.txt}>
        Fundada pelo <Text style={styles.highlight}>piloto Bruce McLaren</Text> em 1963, destacou-se nas pistas,
        conquistando <Text style={styles.highlight}>múltiplos títulos na Fórmula 1</Text>. Na década de 1990, revolucionou
        o mundo dos supercarros com o lendário <Text style={styles.highlight}>F1</Text>, o mais rápido de sua era.
      </Text>
      
      <Text style={styles.txt}>
        Com modelos como o <Text style={styles.highlight}>P1</Text> e a série <Text style={styles.highlight}>720S</Text>, uniu <Text style={styles.highlight}>tecnologia de corrida</Text> e
        <Text style={styles.highlight}> engenharia de ponta</Text>, criando máquinas que transcendem o convencional.
      </Text>
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate("Login")}>Voltar para o Login</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ff5800',
    marginBottom: 24,
    textAlign: 'center',
  },
  txt: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
    textAlign:"justify"
  },
  highlight: {
    fontWeight: '600',
    color: '#ff5800'
  },
  btn: {
    backgroundColor: '#ff5800',
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
    alignSelf:"flex-end"
  }
});