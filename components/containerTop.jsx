import { StyleSheet, View, Text, Image } from 'react-native';

const image = '../assets/profilePicture.jpg';

const ContainerTop = () => {
  return (
    <View style= {styles.container}>
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
    }
  });

export default ContainerTop;