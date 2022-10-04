import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ContainerBottom = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.blackBoldText}>
              Mi nombre es Álvaro Ramos Martín y actualmente
              soy estudiante del ciclo formativo de grado superior
              de DAM en los Salesianos La Cuesta.
              Me encantan los ordenadores
              y espero aprender mucho de ellos en el futuro. 😁
          </Text>
          <QRCode value='https://github.com/AlvRM11/T1P1-PGL.git' />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      container: {
        flex: 3,
        flexDirection: 'column', //Por defecto es column, pero para que quede claro
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#A7B8F1'
      },
  
      blackBoldText: {
          justifyContent: 'center',
          fontWeight: 'bold',
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 80
      }
    });
  
  export default ContainerBottom;