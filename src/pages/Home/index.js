import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>VIDA SAUDÁVEL</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>O que é uma vida saudável?</Text>
          <Text style={styles.subtitle}>Uma vida saudável envolve cuidar do corpo e da mente.</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Por que ter uma vida saudável?</Text>
          <Text style={styles.subtitle}>Ter uma vida saudável aumenta a qualidade de vida e a felicidade.</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Mais Longevidade para sua vida</Text>
          <Text style={styles.subtitle}>Uma vida saudável contribui para uma maior longevidade e envelhecimento saudável.</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Dicas de saúde</Text>
          <Text style={styles.subtitle}>Mantenha uma alimentação equilibrada, pratique exercícios regularmente e durma bem.</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Crie seu perfil</Text>
          <Text style={styles.subtitle}>Compartilhe suas experiências para ter uma vida mais saudável.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#00A86B',
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00A86B',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#004D34',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#004D34',
  },
});

