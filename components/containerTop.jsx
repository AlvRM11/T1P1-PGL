import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

const profilePicture = '../assets/profilePicture.jpg';
const backgroundImage = '../assets/backgroundImage.jpg';

const ContainerTop = () => {
  return (
    <View style= {styles.container}>
        <ImageBackground source={require(backgroundImage)} resizeMode='cover' style={styles.backgroundImage}>
            <Image 
                source={require(profilePicture)}
                style={styles.profileImage}
            />
            <Text style={styles.whiteBoldText}>
                Álvaro Ramos Martín
            </Text>
        </ImageBackground>
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

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 15
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },

    whiteBoldText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15,
        marginTop: 10
    }
  });

export default ContainerTop;