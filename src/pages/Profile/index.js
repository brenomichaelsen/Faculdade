import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import foto from './foto.png';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={foto} style={styles.photo} />
        <Text style={styles.name}>Cristina Romero Brito</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Idade:</Text>
        <Text style={styles.value}>28</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.value}>São Paulo</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Estado:</Text>
        <Text style={styles.value}>São Paulo</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Estado Civil:</Text>
        <Text style={styles.value}>Solteira</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Interesses:</Text>
        <Text style={styles.value}>Tecnologia, Esportes, Viagens</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Frase de inspiração:</Text>
        <Text style={styles.value}>"Acredite em você mesmo e tudo será possível"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {},
});
