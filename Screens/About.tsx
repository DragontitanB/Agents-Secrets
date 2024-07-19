// Screen/About.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

const AboutScreen = () => {
  // Información del oficial
  const officerInfo = {
    photo: 'https://img.freepik.com/fotos-premium/oficial-policia-seguridad-hombre-uniforme-ciudad-defensa_1020867-33781.jpg?w=826', // Reemplaza con la URL real de la foto
    firstName: 'Peter',
    lastName: 'Martinez',
    badgeNumber: '12022-0150',
  };

  // Frase de reflexión
  const reflection = "Las máquinas y las herramientas no tienen cerebro: utiliza el tuyo.";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Acerca de la Aplicación</Text>
        <Text style={styles.paragraph}>
          Desarrolla una aplicación móvil destinada a policías secretos para su uso durante operaciones de vigilancia y seguridad. Esta aplicación les permitirá registrar y gestionar incidencias y vivencias de una manera segura y organizada. La aplicación debe incluir las siguientes características:
        </Text>
        <Text style={styles.paragraph}>
          Desarrollada por Bryan Daniel Quiñones Garcia, la aplicación utiliza tecnologías modernas como
          React Native y Expo para garantizar un rendimiento rapido y eficiente para telefonos.
        </Text>
        <Text style={styles.paragraph}>
          Para cualquier pregunta o soporte, por favor, contacta a nuestro equipo a través de la sección de
          contacto en la aplicación.
        </Text>
        <Text style={styles.version}>Versión 1.0.0</Text>
        
        <View style={styles.officerContainerImage}>
          <Image
            source={{ uri: officerInfo.photo }}
            style={styles.officerPhoto}
          />
        </View>

        <View style={styles.officerContainer}>
          <View style={styles.officerDetails}>
            <Text style={styles.officerName}>{officerInfo.firstName} {officerInfo.lastName}</Text>
            <Text style={styles.officerBadge}>Matrícula: {officerInfo.badgeNumber}</Text>
          </View>
        </View>

        <View style={styles.reflectionContainer}>
          <Text style={styles.reflectionText}>{reflection}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  scrollViewContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#E0E0E0',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    color: '#B0B0B0',
  },
  version: {
    fontSize: 14,
    color: '#888',
    marginTop: 16,
    textAlign: 'center',
  },
  officerContainerImage: {
    alignItems: 'center',
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  officerPhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 16,
  },
  officerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
  },
  officerDetails: {
    alignItems: 'center',
  },
  officerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  officerBadge: {
    fontSize: 16,
    color: '#555',
  },
  reflectionContainer: {
    marginTop: 15,
    padding: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  reflectionText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default AboutScreen;