import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function Favorites() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favoritos de Notícias</Text>
        <TouchableOpacity onPress={() => openLink('https://revistacasaejardim.globo.com/Casa-e-Jardim/Dicas/noticia/2018/12/6-alimentos-que-desintoxicam-o-corpo.html')}>
          <Text style={styles.newsTitle}>6 alimentos que desintoxicam o corpo</Text>
          <Text style={styles.newsSubtitle}>Seja para te ajudar na dieta ou para consumo diário normal, esses alimentos prometem eliminar as toxinas presentes no corpo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favoritos de Receitas</Text>
        <TouchableOpacity onPress={() => openLink('https://www.tudogostoso.com.br/receita/100781-bolo-de-banana-e-aveia.html')}>
          <Text style={styles.recipeTitle}>Bolo de Banana e Aveia</Text>
          <Text style={styles.recipeSubtitle}>Essa receita de bolo de banana com aveia é uma ótima opção para quem está de dieta mas não dispensa um docinho!</Text>
        </TouchableOpacity>
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
  section: {
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007BFF',
  },
  newsSubtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFC107',
  },
  recipeSubtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
});
