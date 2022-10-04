import { StyleSheet, View, Text, Image } from 'react-native';

const image = '../assets/profilePicture.jpg';

const ContainerTop = () => {
  return (
    <View style= {styles.container}>
        <Image 
            source={require(image)}
            style={styles.containerImage}
        />
        <Text style={styles.whiteBoldText}>
            Álvaro Ramos Martín
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#b5b2b2',
    },
    
    containerImage: {
        width: 80,
        height: 80,
        borderRadius: 50
    },

    whiteBoldText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15
    }
  });

export default ContainerTop;