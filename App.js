import { StyleSheet, View } from 'react-native';
import ContainerBottom from './components/containerBottom';
import ContainerTop from './components/containerTop';

export default function App() {
  return (
    <View style={styles.container}>
      <ContainerTop />
      <ContainerBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
