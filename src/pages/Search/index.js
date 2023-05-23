import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [newsChecked, setNewsChecked] = useState(false);
  const [recipesChecked, setRecipesChecked] = useState(false);
  const [usersChecked, setUsersChecked] = useState(false);

  const handleSearch = () => {
    // Implementar ação de busca aqui
    console.log('Realizando busca...');
    console.log('Texto de busca:', searchText);
    console.log('Buscar por notícias:', newsChecked);
    console.log('Buscar por receitas:', recipesChecked);
    console.log('Buscar por usuários:', usersChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BUSCAR</Text>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua busca"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={newsChecked}
          onValueChange={setNewsChecked}
        />
        <Text style={styles.checkboxLabel}>Notícias</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={recipesChecked}
          onValueChange={setRecipesChecked}
        />
        <Text style={styles.checkboxLabel}>Receitas</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={usersChecked}
          onValueChange={setUsersChecked}
        />
        <Text style={styles.checkboxLabel}>Usuários</Text>
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Histórico de Buscas</Text>
        {/* Renderizar o histórico de buscas aqui */}
        <Text style={styles.historyText}>Busca 1</Text>
        <Text style={styles.historyText}>Busca 2</Text>
        <Text style={styles.historyText}>Busca 3</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00A86B',
    textAlign:'center',

  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  historyContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyText: {
    fontSize: 14,
    marginBottom: 5,
  },
});