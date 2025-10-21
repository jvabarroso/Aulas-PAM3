import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Partiu descobrir a história das principais marcas de carros de luxo?</Text>
      <Text style={styles.txt}>Para uma melhor experiência, digite seu nome</Text>
      
      <TextInput
        placeholder="Digite seu nome aqui"
        style={styles.input}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home", { nome })}
      >
        <Text style={styles.btnTxt}>Próxima tela</Text>
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
    backgroundColor: '#f5f5f5'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#2d3a5e',
    padding: 12,
    marginVertical: 24,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#2d3a5e',
    padding: 14,
    borderRadius: 8,
    marginTop: 16
  },
  txt: {
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16
  },
  btnTxt: {
    color: 'white',
    fontWeight: '600'
  }
});
