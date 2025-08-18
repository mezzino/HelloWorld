import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

export default function App() {

  return (
   <ImageBackground source={require('./assets/icon.png')} style={styles.backgroundImage}>
    <View style={styles.overlay}>
      <Text style={styles.header}>Hello World</Text>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,255,255,0.3)',
    padding: 130,
    borderRadius: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
