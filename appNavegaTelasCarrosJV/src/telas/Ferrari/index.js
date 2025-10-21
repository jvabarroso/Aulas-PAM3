import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ferrari() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Já conhecia a história da Ferrari?</Text>
      
      <Text style={styles.txt}>
        Fundada por <Text style={styles.highlight}>Enzo Ferrari</Text> em 1939 (como Scuderia Ferrari, equipe de
        corridas), a marca italiana lançou seu primeiro carro de rua, o <Text style={styles.highlight}>125 S</Text>,
        em 1947. Tornou-se símbolo de <Text style={styles.highlight}>velocidade</Text> e <Text style={styles.highlight}>luxo</Text>, dominando a Fórmula 1
        com <Text style={styles.highlight}>16 títulos</Text> de construtores.
      </Text>
      
      <Text style={styles.txt}>
        Seus modelos icônicos, como o <Text style={styles.highlight}>250 GTO</Text> e o <Text style={styles.highlight}>F40</Text>,
        misturam <Text style={styles.highlight}>performance radical</Text> e <Text style={styles.highlight}>elegância</Text> inigualável.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    textAlign: "justify"
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
    color: '#dc0000', 
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
    color: '#dc0000'
  }
});