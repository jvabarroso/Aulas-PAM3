import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Lamborghini() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bora conhecer a história da Lamborghini?</Text>
      
      <Text style={styles.txt}>
        Criada em 1963 por <Text style={styles.highlight}>Ferruccio Lamborghini</Text>, ex-fabricante de tratores,
        nasceu de uma <Text style={styles.highlight}>rivalidade com Ferrari</Text>. Revolucionou o mercado com o <Text style={styles.highlight}>Miura (1966)</Text>,
        primeiro supercarro com motor V12 central.
      </Text>
      
      <Text style={styles.txt}>
        Seu <Text style={styles.highlight}>design agressivo</Text> e <Text style={styles.highlight}>inovações radicais</Text> se eternizaram em ícones como o <Text style={styles.highlight}>Countach</Text> e o <Text style={styles.highlight}>Aventador</Text>,
        consolidando seu legado como símbolo da audácia automotiva.
      </Text>
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
    color: '#afe301',
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
    color: '#afe301'
  }
});