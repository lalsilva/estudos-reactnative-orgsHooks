import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png';

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default function Topo() {
  return (
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.imagem} />
      <Text style={estilos.boasVindas}>Olá Luiz</Text>
      <Text style={estilos.legenda}>Encontre os melhores produtos</Text>
    </View>
  );
}
