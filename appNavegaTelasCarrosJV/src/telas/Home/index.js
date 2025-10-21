import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ route, navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Bem-vindo, {route.params?.nome}!</Text>
    <Text style={styles.txt}>
      Aqui você vai conhecer a história das maiores marcas de carros de luxo do mundo.
    </Text>
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate("Tabs")}
      activeOpacity={0.9}
    >
      <Text style={styles.btnTexto}>Começar a aventura</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: '#ffffff'
  },
  btn: {
    backgroundColor: '#2d3a5e',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    minWidth: '60%',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  txt: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24
  },
  btnTexto: {
    color: 'white',
    fontWeight: '600',
  }
});